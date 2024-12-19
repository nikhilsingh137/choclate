import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ICare,
  IChoclate,
  IFooter,
  IHeader,
  IImage,
  ILeder,
  INatural,
  IProduct,
  IProductSeller,
  IProject,
  ISally,
  ISeller,
  IShop,
  ISpred,
} from "./Article";

export interface IType {
  isloading: boolean;
  headerData: Array<IHeader>;
  shopData: Array<IShop>;
  imageData: Array<IImage>;
  sellerData: Array<ISeller>;
  sallyData: Array<ISally>;
  spredData: Array<ISpred>;
  lederData: Array<ILeder>;
  projectData: Array<IProject>;
  footerData: Array<IFooter>;
  productData: Array<IProduct>;
  naturalData: Array<INatural>;
  choclateData: Array<IChoclate>;
  careData: Array<ICare>;
  productsellerData: Array<IProductSeller>;
  error: boolean;
}

export const fetchHeader = createAsyncThunk("fetchHeader", async () => {
  const headerData = await fetch(
    "https://nikhilsingh137.github.io/React_data/choclate/header.json"
  );
  return headerData.json();
});
export const fetchShop = createAsyncThunk("fetchShop", async () => {
  const shopData = await fetch(
    "https://nikhilsingh137.github.io/React_data/choclate/shop.json"
  );
  return shopData.json();
});
export const fetchImage = createAsyncThunk("fetchImage", async () => {
  const imageData = await fetch(
    "https://nikhilsingh137.github.io/React_data/choclate/image.json"
  );
  return imageData.json();
});
export const fetchSeller = createAsyncThunk("fetchSeller", async () => {
  const sellerData = await fetch(
    "https://nikhilsingh137.github.io/React_data/choclate/seller.json"
  );
  return sellerData.json();
});
export const fetchSally = createAsyncThunk("fetchSally", async () => {
  const sallyData = await fetch(
    "https://nikhilsingh137.github.io/React_data/choclate/sally.json"
  );
  return sallyData.json();
});
export const fetchSpred = createAsyncThunk("fetchSpred", async () => {
  const spredData = await fetch(
    "https://nikhilsingh137.github.io/React_data/choclate/spred.json"
  );
  return spredData.json();
});
export const fetchLeder = createAsyncThunk("fetchLeder", async () => {
  const lederData = await fetch(
    "https://nikhilsingh137.github.io/React_data/choclate/leder.json"
  );
  return lederData.json();
});
export const fetchProject = createAsyncThunk("fetchProject", async () => {
  const projectData = await fetch(
    "https://nikhilsingh137.github.io/React_data/choclate/project.json"
  );
  return projectData.json();
});
export const fetchFooter = createAsyncThunk("fetchFooter", async () => {
  const footerData = await fetch(
    "https://nikhilsingh137.github.io/React_data/choclate/footer.json"
  );
  return footerData.json();
});
export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  const productData = await fetch(
    "https://nikhilsingh137.github.io/React_data/choclate/product.json"
  );
  return productData.json();
});
export const fetchNatural = createAsyncThunk("fetchNatural", async () => {
  const naturalData = await fetch(
    "https://nikhilsingh137.github.io/React_data/choclate/natural.json"
  );
  return naturalData.json();
});
export const fetchChoclate = createAsyncThunk("fetchChoclate", async () => {
  const choclateData = await fetch(
    "https://nikhilsingh137.github.io/React_data/choclate/choclate.json"
  );
  return choclateData.json();
});
export const fetchCare = createAsyncThunk("fetchCare", async () => {
  const careData = await fetch(
    "https://nikhilsingh137.github.io/React_data/choclate/care.json"
  );
  return careData.json();
});
export const fetchProductSeller = createAsyncThunk(
  "fetchProductSeller",
  async () => {
    const productsellerData = await fetch(
      "https://nikhilsingh137.github.io/React_data/choclate/productseller.json"
    );
    return productsellerData.json();
  }
);

export const initialState: IType = {
  isloading: false,
  headerData: [],
  shopData: [],
  imageData: [],
  sellerData: [],
  sallyData: [],
  spredData: [],
  lederData: [],
  projectData: [],
  footerData: [],
  productData: [],
  naturalData: [],
  choclateData: [],
  careData: [],
  productsellerData: [],
  error: false,
};

const Slice = createSlice({
  name: "Api",
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchHeader.pending, (state, action) => {
      state.isloading = true;
    });
    builder.addCase(fetchHeader.fulfilled, (state, action) => {
      state.headerData = action.payload;
    });
    builder.addCase(fetchShop.fulfilled, (state, action) => {
      state.shopData = action.payload;
    });
    builder.addCase(fetchImage.fulfilled, (state, action) => {
      state.imageData = action.payload;
    });
    builder.addCase(fetchSeller.fulfilled, (state, action) => {
      state.sellerData = action.payload;
    });
    builder.addCase(fetchSally.fulfilled, (state, action) => {
      state.sallyData = action.payload;
    });
    builder.addCase(fetchSpred.fulfilled, (state, action) => {
      state.spredData = action.payload;
    });
    builder.addCase(fetchLeder.fulfilled, (state, action) => {
      state.lederData = action.payload;
    });
    builder.addCase(fetchProject.fulfilled, (state, action) => {
      state.projectData = action.payload;
    });
    builder.addCase(fetchFooter.fulfilled, (state, action) => {
      state.footerData = action.payload;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.productData = action.payload;
    });
    builder.addCase(fetchNatural.fulfilled, (state, action) => {
      state.naturalData = action.payload;
    });
    builder.addCase(fetchChoclate.fulfilled, (state, action) => {
      state.choclateData = action.payload;
    });
    builder.addCase(fetchCare.fulfilled, (state, action) => {
      state.careData = action.payload;
    });
    builder.addCase(fetchProductSeller.fulfilled, (state, action) => {
      state.productsellerData = action.payload;
    });
    builder.addCase(fetchHeader.rejected, (state, action) => {
      state.error = true;
    });
  },
  reducers: {},
});

export default Slice.reducer;
