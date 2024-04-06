import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from "react-redux";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { IconButton } from "@mui/material";
import { deleteCart, getCart } from "../../reducer/Cart";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const dispatch = useDispatch();
  const product = useSelector((store) => store.productCart.cart);
  const totalPrice = useSelector((store) => store.productCart.totalPrice);
  // console.log(totalPrice);

  React.useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div style={{ paddingBottom: "50px" }} className="h-[90vh] ">
        {product.map((e) => {
          return (
            <>
              <div
                style={{ padding: "10px 30px", borderBottom: "2px solid gray" }}
                key={e.id}
              >
                <div className="flex justify-between py-[7px] gap-[30px] items-center ">
                  <div className="w-[50%] flex justify-between items-center gap-[20px]">
                    <img
                      style={{
                        width: "35%",
                        height: "70px",
                        objectFit: "contain",
                      }}
                      src={e.image}
                      alt=""
                    />
                    <h1 className="text-[20px] font-medium">{`${e.price} c`}</h1>
                  </div>
                  <IconButton onClick={() => dispatch(deleteCart(e.id))}>
                    <HighlightOffIcon style={{ color: "red" }} />
                  </IconButton>
                </div>
                {/* <h1 style={{ fontSize: "16px" }}>{e.title}</h1> */}
              </div>
            </>
          );
        })}
      </div>
      <div className="w-[23%] h-[10vh] bg-[red] fixed flex justify-between px-[20px] items-center">
        <h1 style={{ color: "#fff" }}>Subtotal : {totalPrice}</h1>
        <h1 style={{ color: "#fff" }}>Buy</h1>
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <img
            src="src/assets/Carzina.svg"
            alt=""
            onClick={toggleDrawer(anchor, true)}
          />
          {/* <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleDrawer(anchor, true)}
          >
            <path
              d="M8.50033 19.6667C8.96056 19.6667 9.33366 19.2936 9.33366 18.8333C9.33366 18.3731 8.96056 18 8.50033 18C8.04009 18 7.66699 18.3731 7.66699 18.8333C7.66699 19.2936 8.04009 19.6667 8.50033 19.6667Z"
              stroke="#222222"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M18.4993 19.6667C18.9596 19.6667 19.3327 19.2936 19.3327 18.8333C19.3327 18.3731 18.9596 18 18.4993 18C18.0391 18 17.666 18.3731 17.666 18.8333C17.666 19.2936 18.0391 19.6667 18.4993 19.6667Z"
              stroke="#222222"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M1 1H4.63636L7.07273 12.9019C7.15586 13.3112 7.38355 13.6788 7.71595 13.9404C8.04835 14.202 8.46427 14.341 8.89091 14.333H17.7273C18.1539 14.341 18.5698 14.202 18.9022 13.9404C19.2346 13.6788 19.4623 13.3112 19.5455 12.9019L21 5.44434H5.54545"
              stroke="#222222"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg> */}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
