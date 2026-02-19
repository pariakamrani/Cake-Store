import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// وقتی میرفتی تو صفحه کیک شکلاتی صفحه اسکرول شده بود و پایین صفحه باز میشد  این کامپوننت اسکرول رو رفرش 
// میکنه و دیگه صفحه جدید از پایین نمایش داده نمیشه 


function Scroll() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default Scroll;
