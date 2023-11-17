import { environment } from '../environment/environment';
import * as CryptoJS from 'crypto-js';

export const encrypt = (data: string): string => {
	return CryptoJS.AES.encrypt(data, environment.keyEcrypt).toString();
};

