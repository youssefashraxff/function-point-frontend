import { environments } from '../../../environments/environments.dev';

export const appAPIs = {
  calculateUFP: `${environments.API_URL}api/functionpoint/ufp`,
  calculateTCF: `${environments.API_URL}api/functionpoint/tcf`,
  calculateFP: `${environments.API_URL}api/functionpoint/fp`,
  calculateLOC: `${environments.API_URL}api/functionpoint/loc`,
  getLanguages: `${environments.API_URL}api/functionpoint/languages`,
  getGSCAttributes: `${environments.API_URL}api/functionpoint/gsc-attributes`,
};
