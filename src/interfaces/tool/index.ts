import { RentalInterface } from 'interfaces/rental';
import { RentalPriceInterface } from 'interfaces/rental-price';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface ToolInterface {
  id?: string;
  name: string;
  availability_status: boolean;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  rental?: RentalInterface[];
  rental_price?: RentalPriceInterface[];
  company?: CompanyInterface;
  _count?: {
    rental?: number;
    rental_price?: number;
  };
}

export interface ToolGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  company_id?: string;
}
