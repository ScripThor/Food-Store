import { db } from '@/utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import type { Product } from '@/types/products';

export const getProducts = async (): Promise<Product[]> => {
    const productsCollection = collection(db, 'products');
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs.map((doc) => doc.data() as Product);
};

export const getProductsByCategory = async (categorySlug: string): Promise<Product[]> => {
    const productsCollection = collection(db, 'products');
    const snapshot = await getDocs(productsCollection);
    return snapshot.docs
        .map((doc) => doc.data() as Product)
        .filter((product) => product.category_slug === categorySlug);
};