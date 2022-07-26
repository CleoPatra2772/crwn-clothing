import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import {ProductContainer } from './shop.styles';
import Category from '../category/category.component';

import { fetchCategoriesStart} from '../../store/categories/category.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';


const Shop = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    
    //const categoriesArray = await getCategoriesAndDocuments('categories');
    dispatch(fetchCategoriesStart());
  

}, []);
  return (
    // <CategoriesProvider>
    <Routes>
  <Route index element={<CategoriesPreview />} />
  <Route path=":category" element={<Category />} />
  </Routes>
  // </CategoriesProvider>
  );
};

export default Shop;
