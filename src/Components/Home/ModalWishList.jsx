import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import { deleteWishList, getWishList } from "../../reducer/Home";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { ShoppingCartOutlined } from "@ant-design/icons";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import { AddProduct } from "../../reducer/Cart";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const product = useSelector((store) => store.Product.WishList);

  const currentDate = React.useMemo(() => new Date(), []);

  React.useEffect(() => {
    dispatch(getWishList());
  }, []);

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <img src="src/assets/Wishlist.svg" alt="" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center justify-between w-[92%] scroll-y m-auto">
            <h1 className="text-[22px] font-semibold py-[20px]">
              Любимые вещи для перебор
            </h1>

            <IconButton onClick={handleClose}>
              <CloseIcon
                style={{ fontSize: "30px", color: "blue", hover: "red" }}
                className="hover:text-[red]"
              />
            </IconButton>
          </div>
          <div
            style={{ overflow: "auto" }}
            className="w-[90%] h-[90vh] m-auto flex justify-around flex-wrap"
          >
            {product?.map((e) => {
              return (
                <div className="w-[24%] px-[20px] py-[40px]" key={e.id}>
                  <img
                    style={{
                      width: "80%",
                      height: "30vh",
                      objectFit: "contain",
                    }}
                    className="m-auto"
                    src={e.image}
                    alt=""
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    className=""
                  >
                    <h1
                      style={{ padding: "20px 14px", fontFamily: "sans-serif" }}
                    >{`${e.price} c`}</h1>
                    <IconButton onClick={() => dispatch(deleteWishList(e.id))}>
                      <ThreeSixtyIcon
                        style={{
                          fontSize: "30px",
                          color: "green",
                        }}
                      />
                    </IconButton>
                  </div>
                  <h1
                    style={{
                      paddingBottom: "20px",
                      textAlign: "start",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {e.title}
                  </h1>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      justifyContent: "center",
                      padding: " 10px 20px",
                      width: "80%",
                      fontSize: "16px",
                      borderRadius: "10px",
                    }}
                    className="bg-[orange] hover:bg-[#ffc250]"
                    onClick={() => dispatch(AddProduct(e))}
                  >
                    <ShoppingCartOutlined style={{ fontSize: "20px" }} />В
                    корзину
                  </button>
                </div>
              );
            })}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
