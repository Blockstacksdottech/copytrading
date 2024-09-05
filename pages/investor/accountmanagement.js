import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import { useContext, useEffect, useState } from "react";
import { formatImage, postReq, req, uploadFiles, uploadMultiFiles } from "@/helpers";
import { toast } from "react-toastify";
import Checker from "@/pages/components/utils/Checker"
import { UserContext } from "@/contexts/UserContextData";

const Accountmanagement = () => {
  const {user,setUser} = useContext(UserContext)
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileData, setProfileData] = useState({
    full_name: '',
    mobile: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postal_code: '',
    government_id_type: '',
    government_id_number: '',
    tin: '',
    profile_picture: null,
  });
  const [documents,setDocuments] = useState({
    front :null,
    back : null,
    tin : null
  })
  const [loading,setLoading] = useState(true)


  useEffect(() => {
    fetchProfile()
    fetchDocuments()
  },[])


  const handleChange = (e) => {
    const { name, value } = e.target;
    let temp = {...profileData}
    temp[name] = value
    setProfileData(temp);
  };

  const handleFileChange = (e) => {
    let temp = {...profileData}
    temp["profile_picture"] = e.target.files[0]
    setProfileData(temp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {profile_picture,...body} = profileData
    
    // Handle form submission here
    console.log(body);
    console.log(profile_picture)
    const targetFiles = profile_picture instanceof File ? [profile_picture] : [] 
    const resp = await uploadFiles(targetFiles,body,"profile_picture","profile")
    if (resp){
      toast.success("saved")
      fetchProfile();
    }
  };

  const sumbitDocs = async (e) => {
    e.preventDefault();
    let files =[]
    let keys = []
    for (const k of Object.keys(documents)){
      if (documents[k] && documents[k] instanceof File){
        files.push(documents[k])
        keys.push(k)
      }
    }
    const resp = await uploadMultiFiles(files,{},keys,"documents")
    if (resp){
      toast.success("updated")
      fetchDocuments()
    }else{
      toast.error("failed")
    }
  }

  const handleChangePassword = async (e) => {
    e.preventDefault();

    const body = {
      old_password: currentPassword,
      new_password: newPassword,
      confirm_password: confirmPassword,
    };

    const response = await postReq("change-password", body);
    if (response){
      toast.success("Password updated")
    }
    
  };

  const fetchProfile = async () => {
    const resp = await req("profile")
    if (resp){
      setProfileData(resp)
      
    }
  }

  const fetchDocuments = async () => {
    const resp = await req("documents")
    if (resp){
      setDocuments(resp)
    }
  }

  const handleDocChange = (e) => {
    let temp = {...documents}
    temp[e.target.name] = e.target.files[0]
    setDocuments(temp);
  }


  return (
    <>
      <Head>
        <title>Account Management</title>
        <meta name="description" content="Account Management" />
      </Head>
      <Checker invalid={true}>

      <Headtag />
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-12">
                <h1 className="m-0">Account Management</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
          <div className="row">
      <div className="col-lg-12">
        <div className="card shadow-none">
          <div className="card-header">
            <h5 className="mb-0">Profile</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Profile Picture</label>
                <div className="row">
                  <div className="col-lg-3">
                    <img
                      src={profileData.profile_picture  && !(profileData.profile_picture instanceof File) ? formatImage(profileData.profile_picture) : "/dist/img/avatar5.png"}
                      className="img-circle elevation-1 img-fluid"
                      alt="Profile"
                    />
                  </div>
                  <div className="col-lg-3 my-auto">
                    <input
                      className="form-control"
                      type="file"
                      name="profile_picture"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Full Name"
                      name="full_name"
                      value={profileData.full_name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      name="email"
                      disabled={true}
                      value={user.email}
                 
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Mobile</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter Contact Number"
                      name="mobile"
                      value={profileData.mobile}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                      name="address"
                      value={profileData.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter City Name"
                      name="city"
                      value={profileData.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>State or Province</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your State or Province"
                      name="state"
                      value={profileData.state}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Country</label>
                    <select
                      id="country"
                      name="country"
                      className="form-control"
                      value={profileData.country}
                      onChange={handleChange}
                    >
                      <option value="US">United States</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AX">Åland Islands</option>
                            <option value="AL">Albania</option>
                            <option value="DZ">Algeria</option>
                            <option value="AS">American Samoa</option>
                            <option value="AD">Andorra</option>
                            <option value="AO">Angola</option>
                            <option value="AI">Anguilla</option>
                            <option value="AQ">Antarctica</option>
                            <option value="AG">Antigua and Barbuda</option>
                            <option value="AR">Argentina</option>
                            <option value="AM">Armenia</option>
                            <option value="AW">Aruba</option>
                            <option value="AU">Australia</option>
                            <option value="AT">Austria</option>
                            <option value="AZ">Azerbaijan</option>
                            <option value="BS">Bahamas</option>
                            <option value="BH">Bahrain</option>
                            <option value="BD">Bangladesh</option>
                            <option value="BB">Barbados</option>
                            <option value="BY">Belarus</option>
                            <option value="BE">Belgium</option>
                            <option value="BZ">Belize</option>
                            <option value="BJ">Benin</option>
                            <option value="BM">Bermuda</option>
                            <option value="BT">Bhutan</option>
                            <option value="BO">Bolivia</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BW">Botswana</option>
                            <option value="BV">Bouvet Island</option>
                            <option value="BR">Brazil</option>
                            <option value="IO">
                              British Indian Ocean Territory
                            </option>
                            <option value="BN">Brunei Darussalam</option>
                            <option value="BG">Bulgaria</option>
                            <option value="BF">Burkina Faso</option>
                            <option value="BI">Burundi</option>
                            <option value="KH">Cambodia</option>
                            <option value="CM">Cameroon</option>
                            <option value="CA">Canada</option>
                            <option value="CV">Cape Verde</option>
                            <option value="KY">Cayman Islands</option>
                            <option value="CF">Central African Republic</option>
                            <option value="TD">Chad</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CX">Christmas Island</option>
                            <option value="CC">Cocos (Keeling) Islands</option>
                            <option value="CO">Colombia</option>
                            <option value="KM">Comoros</option>
                            <option value="CG">Congo</option>
                            <option value="CD">
                              Congo, The Democratic Republic of The
                            </option>
                            <option value="CK">Cook Islands</option>
                            <option value="CR">Costa Rica</option>
                            <option value="CI">Cote D'ivoire</option>
                            <option value="HR">Croatia</option>
                            <option value="CU">Cuba</option>
                            <option value="CY">Cyprus</option>
                            <option value="CZ">Czech Republic</option>
                            <option value="DK">Denmark</option>
                            <option value="DJ">Djibouti</option>
                            <option value="DM">Dominica</option>
                            <option value="DO">Dominican Republic</option>
                            <option value="EC">Ecuador</option>
                            <option value="EG">Egypt</option>
                            <option value="SV">El Salvador</option>
                            <option value="GQ">Equatorial Guinea</option>
                            <option value="ER">Eritrea</option>
                            <option value="EE">Estonia</option>
                            <option value="ET">Ethiopia</option>
                            <option value="FK">
                              Falkland Islands (Malvinas)
                            </option>
                            <option value="FO">Faroe Islands</option>
                            <option value="FJ">Fiji</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="GF">French Guiana</option>
                            <option value="PF">French Polynesia</option>
                            <option value="TF">
                              French Southern Territories
                            </option>
                            <option value="GA">Gabon</option>
                            <option value="GM">Gambia</option>
                            <option value="GE">Georgia</option>
                            <option value="DE">Germany</option>
                            <option value="GH">Ghana</option>
                            <option value="GI">Gibraltar</option>
                            <option value="GR">Greece</option>
                            <option value="GL">Greenland</option>
                            <option value="GD">Grenada</option>
                            <option value="GP">Guadeloupe</option>
                            <option value="GU">Guam</option>
                            <option value="GT">Guatemala</option>
                            <option value="GG">Guernsey</option>
                            <option value="GN">Guinea</option>
                            <option value="GW">Guinea-bissau</option>
                            <option value="GY">Guyana</option>
                            <option value="HT">Haiti</option>
                            <option value="HM">
                              Heard Island and Mcdonald Islands
                            </option>
                            <option value="VA">
                              Holy See (Vatican City State)
                            </option>
                            <option value="HN">Honduras</option>
                            <option value="HK">Hong Kong</option>
                            <option value="HU">Hungary</option>
                            <option value="IS">Iceland</option>
                            <option value="IN">India</option>
                            <option value="ID">Indonesia</option>
                            <option value="IR">
                              Iran, Islamic Republic of
                            </option>
                            <option value="IQ">Iraq</option>
                            <option value="IE">Ireland</option>
                            <option value="IM">Isle of Man</option>
                            <option value="IL">Israel</option>
                            <option value="IT">Italy</option>
                            <option value="JM">Jamaica</option>
                            <option value="JP">Japan</option>
                            <option value="JE">Jersey</option>
                            <option value="JO">Jordan</option>
                            <option value="KZ">Kazakhstan</option>
                            <option value="KE">Kenya</option>
                            <option value="KI">Kiribati</option>
                            <option value="KP">
                              Korea, Democratic People's Republic of
                            </option>
                            <option value="KR">Korea, Republic of</option>
                            <option value="KW">Kuwait</option>
                            <option value="KG">Kyrgyzstan</option>
                            <option value="LA">
                              Lao People's Democratic Republic
                            </option>
                            <option value="LV">Latvia</option>
                            <option value="LB">Lebanon</option>
                            <option value="LS">Lesotho</option>
                            <option value="LR">Liberia</option>
                            <option value="LY">Libyan Arab Jamahiriya</option>
                            <option value="LI">Liechtenstein</option>
                            <option value="LT">Lithuania</option>
                            <option value="LU">Luxembourg</option>
                            <option value="MO">Macao</option>
                            <option value="MK">
                              Macedonia, The Former Yugoslav Republic of
                            </option>
                            <option value="MG">Madagascar</option>
                            <option value="MW">Malawi</option>
                            <option value="MY">Malaysia</option>
                            <option value="MV">Maldives</option>
                            <option value="ML">Mali</option>
                            <option value="MT">Malta</option>
                            <option value="MH">Marshall Islands</option>
                            <option value="MQ">Martinique</option>
                            <option value="MR">Mauritania</option>
                            <option value="MU">Mauritius</option>
                            <option value="YT">Mayotte</option>
                            <option value="MX">Mexico</option>
                            <option value="FM">
                              Micronesia, Federated States of
                            </option>
                            <option value="MD">Moldova, Republic of</option>
                            <option value="MC">Monaco</option>
                            <option value="MN">Mongolia</option>
                            <option value="ME">Montenegro</option>
                            <option value="MS">Montserrat</option>
                            <option value="MA">Morocco</option>
                            <option value="MZ">Mozambique</option>
                            <option value="MM">Myanmar</option>
                            <option value="NA">Namibia</option>
                            <option value="NR">Nauru</option>
                            <option value="NP">Nepal</option>
                            <option value="NL">Netherlands</option>
                            <option value="AN">Netherlands Antilles</option>
                            <option value="NC">New Caledonia</option>
                            <option value="NZ">New Zealand</option>
                            <option value="NI">Nicaragua</option>
                            <option value="NE">Niger</option>
                            <option value="NG">Nigeria</option>
                            <option value="NU">Niue</option>
                            <option value="NF">Norfolk Island</option>
                            <option value="MP">Northern Mariana Islands</option>
                            <option value="NO">Norway</option>
                            <option value="OM">Oman</option>
                            <option value="PK">Pakistan</option>
                            <option value="PW">Palau</option>
                            <option value="PS">
                              Palestinian Territory, Occupied
                            </option>
                            <option value="PA">Panama</option>
                            <option value="PG">Papua New Guinea</option>
                            <option value="PY">Paraguay</option>
                            <option value="PE">Peru</option>
                            <option value="PH">Philippines</option>
                            <option value="PN">Pitcairn</option>
                            <option value="PL">Poland</option>
                            <option value="PT">Portugal</option>
                            <option value="PR">Puerto Rico</option>
                            <option value="QA">Qatar</option>
                            <option value="RE">Reunion</option>
                            <option value="RO">Romania</option>
                            <option value="RU">Russian Federation</option>
                            <option value="RW">Rwanda</option>
                            <option value="SH">Saint Helena</option>
                            <option value="KN">Saint Kitts and Nevis</option>
                            <option value="LC">Saint Lucia</option>
                            <option value="PM">
                              Saint Pierre and Miquelon
                            </option>
                            <option value="VC">
                              Saint Vincent and The Grenadines
                            </option>
                            <option value="WS">Samoa</option>
                            <option value="SM">San Marino</option>
                            <option value="ST">Sao Tome and Principe</option>
                            <option value="SA">Saudi Arabia</option>
                            <option value="SN">Senegal</option>
                            <option value="RS">Serbia</option>
                            <option value="SC">Seychelles</option>
                            <option value="SL">Sierra Leone</option>
                            <option value="SG">Singapore</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="SB">Solomon Islands</option>
                            <option value="SO">Somalia</option>
                            <option value="ZA">South Africa</option>
                            <option value="GS">
                              South Georgia and The South Sandwich Islands
                            </option>
                            <option value="ES">Spain</option>
                            <option value="LK">Sri Lanka</option>
                            <option value="SD">Sudan</option>
                            <option value="SR">Suriname</option>
                            <option value="SJ">Svalbard and Jan Mayen</option>
                            <option value="SZ">Swaziland</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="SY">Syrian Arab Republic</option>
                            <option value="TW">
                              Taiwan, Province of China
                            </option>
                            <option value="TJ">Tajikistan</option>
                            <option value="TZ">
                              Tanzania, United Republic of
                            </option>
                            <option value="TH">Thailand</option>
                            <option value="TL">Timor-leste</option>
                            <option value="TG">Togo</option>
                            <option value="TK">Tokelau</option>
                            <option value="TO">Tonga</option>
                            <option value="TT">Trinidad and Tobago</option>
                            <option value="TN">Tunisia</option>
                            <option value="TR">Turkey</option>
                            <option value="TM">Turkmenistan</option>
                            <option value="TC">Turks and Caicos Islands</option>
                            <option value="TV">Tuvalu</option>
                            <option value="UG">Uganda</option>
                            <option value="UA">Ukraine</option>
                            <option value="AE">United Arab Emirates</option>
                            <option value="GB">United Kingdom</option>
                            <option value="UM">
                              United States Minor Outlying Islands
                            </option>
                            <option value="UY">Uruguay</option>
                            <option value="UZ">Uzbekistan</option>
                            <option value="VU">Vanuatu</option>
                            <option value="VE">Venezuela</option>
                            <option value="VN">Viet Nam</option>
                            <option value="VG">Virgin Islands, British</option>
                            <option value="VI">Virgin Islands, U.S.</option>
                            <option value="WF">Wallis and Futuna</option>
                            <option value="EH">Western Sahara</option>
                            <option value="YE">Yemen</option>
                            <option value="ZM">Zambia</option>
                            <option value="ZW">Zimbabwe</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Zip / Postal Code</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip / Postal Code"
                      name="postal_code"
                      value={profileData.postal_code}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Government-issued ID</label>
                    <div className="input-group">
                      <select
                        className="form-control"
                        name="government_id_type"
                        value={profileData.government_id_type}
                        onChange={handleChange}
                      >
                        <option>Choose</option>
                        <option value="ID Card">ID Card</option>
                        <option value="Passport">Passport</option>
                        <option value="Driving License">Driving License</option>
                      </select>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ID Number"
                        name="government_id_number"
                        value={profileData.government_id_number}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>Taxpayer Identification Number (TIN)</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="TIN"
                      name="tin"
                      value={profileData.tin}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group float-right mb-0">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
            
            <div className="row">
              <div className="col-lg-12">
                <div className="card shadow-none">
                  <div className="card-header">
                    <h5 className="mb-0">Upload Documents</h5>
                    <p className="mb-0">
                      Please upload clear digital copies of their
                      government-issued ID and any other required documents.
                    </p>
                    <p className="mb-0">
                      <strong>Status : </strong> {user.verified ? "Verified" : "Unverified"}
                    </p>
                    {
                      user.reason !== "" && user.reason.length > 0 && !user.verified &&
                      <p className="mb-0">
                      <strong>Reason : </strong> {user.reason}
                    </p>
                    }
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Upload ID Card (Front)</label>
                          {documents.front && !(documents.front instanceof File) && <img
                            src={formatImage(documents.front)}
                            className="elevation-1 img-fluid"
                            alt="Goverment Issued ID Card"
                          /> }
                          
                          <input className="form-control mt-3" name="front" onChange={handleDocChange} type="file" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Upload ID Card (Back)</label>
                          {documents.back && !(documents.back instanceof File) && <img
                            src={formatImage(documents.back)}
                            className="elevation-1 img-fluid"
                            alt="Goverment Issued ID Card"
                          /> }
                          <input className="form-control mt-3" name="back" onChange={handleDocChange} type="file" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>
                            Upload Tax Identification Number (TIN) Card
                          </label>
                          {documents.tin && !(documents.tin instanceof File) && <img
                            src={formatImage(documents.tin)}
                            className="elevation-1 img-fluid"
                            alt="Goverment Issued ID Card"
                          /> }
                          <input className="form-control mt-3" name="tin" onChange={handleDocChange} type="file" />
                        </div>
                      </div>
                    </div>

                    <div className="form-group float-right mb-0">
                      <button type="submit" className="btn btn-primary" onClick={sumbitDocs}>
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="row">
      <div className="col-lg-12">
        <div className="card shadow-none">
          <div className="card-header">
            <h5 className="mb-0">Security</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleChangePassword}>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Current Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Current Password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>New Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group float-right mb-0">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
      </div>

      <Feed />
      <Footer />
      <Scripttag />
      </Checker>
      
    </>
  );
};

export default Accountmanagement;
