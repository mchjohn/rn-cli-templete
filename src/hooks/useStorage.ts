/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UseStorage } from '../interfaces/use-storage';

export const useStorage: UseStorage = () => {
  const setItem = useCallback(
    async (key: string, value: string | Record<string, any>): Promise<void> => {
      const parsedValue = typeof value === 'string' ? value : JSON.stringify(value);

      await AsyncStorage.setItem(key, parsedValue);
    },
    [],
  );

  const getItem = useCallback(async (key: string): Promise<string | Record<string, any> | null> => {
    const item = await AsyncStorage.getItem(key);

    if (!item) return null;

    let parsedItem: string | Record<string, any>;
    try {
      parsedItem = JSON.parse(item);
    } catch {
      parsedItem = item;
    }

    return parsedItem;
  }, []);

  const deleteItem = useCallback(async (key: string): Promise<void> => {
    await AsyncStorage.removeItem(key);
  }, []);

  return { setItem, getItem, deleteItem };
};
