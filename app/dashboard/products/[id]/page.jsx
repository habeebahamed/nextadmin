
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  
//   const { id } = params;
//   const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        "product.productname"
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="hidden" name="id" value="{product.id}"/>
          <label>Title</label>
          <input type="text" name="title" placeholder="John Doe" />
          <label>Price</label>
          <input type="number" name="price" placeholder="$99" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="23"/>
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <textarea type="text" name="size" placeholder="New York" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value={true} selected="{user.isAdmin}">Yes</option>
            <option value={false} selected="{!user.isAdmin}">No</option>
          </select>
          <label>Description</label>
          <textarea name="desc" id="desc" row="10" placeholder="description" />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
