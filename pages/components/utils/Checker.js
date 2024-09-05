import React, { useContext, useEffect } from "react";
import { UserContext } from "@/contexts/UserContextData";
import { isLogged, logout } from "@/helpers";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function Checker({ children,refresh,invalid,only_admin,only_manager }) {
  const { user, setUser } = useContext(UserContext);
  const nav = useRouter();
  useEffect(() => {
    async function test() {
      let resp = await isLogged();
      console.log(resp);
      let obj = { ...user };
      if (resp) {
        obj.logged = true;
        obj.username = resp.username;
        obj.email = resp.email;
        obj.isAdmin = resp.is_superuser;
        obj.isInvestor = resp.isInvestor;
        obj.verified = resp.isVerified;
        obj.reason = resp.reason;
        obj.id = resp.id;
        setUser(obj);
        return obj;
      } else {
        return obj;
      }
    }

    test().then((obj) => {
      if (obj.logged) {
        if (only_admin) {
          if (obj.isAdmin){
            return
          }else{
            nav.push("/investor/dashboard")
          }
        }else{
            if (obj.isAdmin){
                nav.push("/admin/investors")
            }else{
              if (obj.verified){
                if (only_manager && obj.isInvestor){
                  return
                }else if (!only_manager){
                  return
                }else{
                  nav.push("/investor/dashboard")
                }
            }else{
                if (invalid){
                    return
                }else{
                    toast.info("Please submit documents to verify your account")
                    nav.push("/investor/accountmanagement");
                }
            }
            
                
            }
        }
      } else {
        nav.push("/login");
      }
    });
  }, [refresh]);
  return <>{children}</>;
}

export default Checker;
