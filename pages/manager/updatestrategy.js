import Head from "next/head";
import Navbar from "../components/panel/navbar";
import Sidebar from "./components/sidebar";
import Feed from "./components/feed";
import Footer from "../components/panel/footer";
import Headtag from "../components/panel/headtag";
import Scripttag from "../components/panel/scripttag";
import React, { useEffect , useState} from "react";
import { toast } from "react-toastify";
import { postReq,req,patchReq } from "@/helpers";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import Checker from "../components/utils/Checker";


const UpdateStrategy = () => {
  const [strategyData, setStrategyData] = useState({
    name: "",
    tradeType: "",
    accountSize: "",
    broker: "",
    controlModel: "",
    price: "",
    briefDescription: "",
    detailedDescription: "",
    maxSubscribers: "",
  });

  const [loading,setLoading] = useState(true)
  //const [id,setId] = useState(-1)

  const params = useSearchParams()
  const id = params.get("id")
  const router = useRouter()


  const handleChange = (e) => {
    setStrategyData({
      ...strategyData,
      [e.target.name]: e.target.value,
    });
  };

  /* useEffect(() =>  {
    
    console.log(params)
    if (id){
      setId(id)
    }else{
      toast.info("no id")
      //router.push("/manager/mystrategy")
    }
  },[params]) */

  useEffect(() => {
    if (id){
      fetchStrategy(id)
      
    }
  },[id])

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/dist/js/datatable.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const fetchStrategy = async (id) => {
    const resp = await req(`strategies/${id}/`)
    if (resp){
      setStrategyData(resp)
      setLoading(false)
    }else{
      toast.error('Failed fetching strat data')
      //router.push("/manager/mystrategy")
    }
  }

  const update = async () => {
    // Check if all required fields are filled
    const { name, tradeType, accountSize, broker, controlModel, price } = strategyData;
    if (!name || !tradeType || !accountSize || !broker || !controlModel || !price) {
      toast.error("Please fill in all the required fields.");
      return;
    }
    console.log(strategyData)

    try {
      const response = await patchReq(`strategies/${strategyData.id}/`, strategyData);

      if (response) {
        console.log("Strategy created successfully:", response);
        toast.success("Strategy created successfully!");
      } else {
        console.log("Failed to create strategy");
        toast.error("Failed to create strategy.");
      }
    } catch (error) {
      console.error("Error creating strategy:", error);
      toast.error("An error occurred while creating the strategy.");
    }
  };

  return (
    <>
      <Head>
        <title>Create Strategy</title>
        <meta name="description" content="Create Strategy" />
      </Head>
      <Checker only_manager={true}>
      <Headtag />
      <Navbar />
      <Sidebar />
    {
      !loading && <>
      <div className="content-wrapper p-4">
      {/* Your form JSX */}
      <form>
        <div className="form-group">
          <label>Name your Strategy</label>
          <input
            className="form-control"
            name="name"
            value={strategyData.name}
            onChange={handleChange}
          />
          <span className="form-text">
            The strategy name is your "brand." Make it short and memorable.
          </span>
        </div>

        <div className="form-group">
          <label>What will you trade?</label>
          <div className="row">
            {/* Trade Type Options */}
            {["Stocks", "Options", "Futures", "Forex"].map((type) => (
              <div className="col-sm-3" key={type}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="tradeType"
                    value={type}
                    checked={strategyData.tradeType === type}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">{type}</label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Model Account Size</label>
          <select
            className="form-control"
            name="accountSize"
            value={strategyData.accountSize}
            onChange={handleChange}
          >
            <option value="">Choose Model Account</option>
            <option value="10000">$10,000</option>
            <option value="25000">$25,000</option>
            <option value="50000">$50,000</option>
            <option value="100000">$100,000</option>
          </select>
          <span className="form-text">
            Your Model Account will increase or decrease as you issue trades.
          </span>
        </div>

        <div className="form-group">
          <label>Broker</label>
          <select
            name="broker"
            className="form-control"
            value={strategyData.broker}
            onChange={handleChange}
          >
            <option value="">Choose Broker</option>
            <option value="IB">Interactive Broker</option>
          </select>
        </div>

        <div className="form-group">
          <label>How will you control your Model Account?</label>
          <div className="row">
            {/* Control Model Options */}
            {["NinjaTrader", "TradeStation"].map((model) => (
              <div className="col-sm-3" key={model}>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="controlModel"
                    value={model}
                    checked={strategyData.controlModel === model}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">{model}</label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>How much to charge?</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="price"
              value={strategyData.price}
              onChange={handleChange}
            />
          </div>
          <span className="form-text">Price per month</span>
        </div>

        <div className="form-group">
          <label>Brief Description</label>
          <textarea
            className="form-control"
            name="briefDescription"
            maxLength="20"
            rows="3"
            value={strategyData.briefDescription}
            onChange={handleChange}
            placeholder="Brief description, 20 words or fewer"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Detailed Description</label>
          <textarea
            className="form-control"
            name="detailedDescription"
            rows="6"
            value={strategyData.detailedDescription}
            onChange={handleChange}
            placeholder="More detailed description if any"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Subscriber Control</label>
          <div className="form-text">
            Some strategy developers want to cap the number of subscribers
            allowed for a trading strategy. You can specify that here.
          </div>
          <input
            type="number"
            className="form-control my-3"
            name="maxSubscribers"
            value={strategyData.maxSubscribers}
            onChange={handleChange}
            placeholder="Max # Subscribers"
          />
          <div className="form-text">
            Leave blank to establish no subscriber limits. Type 0 to allow no
            subscribers. Strategy developer is always allowed to subscribe.
          </div>
        </div>

        <div className="form-group mb-5">
          <button
            type="button"
            className="btn btn-primary float-right"
            onClick={update}
          >
            Update Strategy
          </button>
        </div>
      </form>
    </div>
      </>
    }
      

      <Feed />
      <Footer />
      <Scripttag />
      </Checker>
      
    </>
  );
};

export default UpdateStrategy;

