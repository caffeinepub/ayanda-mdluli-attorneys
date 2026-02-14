import { 
  Scale, 
  Heart, 
  Shield, 
  Gavel, 
  FileText, 
  Home, 
  Stethoscope, 
  Car, 
  Calculator, 
  Building, 
  PenTool,
  LucideIcon
} from 'lucide-react';

export interface Service {
  name: string;
  icon: LucideIcon;
  description: string;
}

export const servicesData: Service[] = [
  {
    name: 'Labour Law',
    icon: Scale,
    description: 'Expert representation in employment disputes, unfair dismissals, workplace discrimination, and collective bargaining matters. We protect your rights in the workplace.'
  },
  {
    name: 'Family & Divorce Law',
    icon: Heart,
    description: 'Compassionate guidance through divorce proceedings, custody arrangements, maintenance claims, and domestic partnerships. We help families navigate difficult transitions.'
  },
  {
    name: 'Criminal Defense',
    icon: Shield,
    description: 'Robust defense representation for all criminal charges, from minor offenses to serious crimes. We ensure your rights are protected throughout the legal process.'
  },
  {
    name: 'Civil Litigation',
    icon: Gavel,
    description: 'Comprehensive litigation services for disputes involving contracts, property, delict, and other civil matters. We fight for your interests in court.'
  },
  {
    name: 'Commercial & Contract Law',
    icon: FileText,
    description: 'Strategic advice on business transactions, contract negotiations, and commercial disputes. We help businesses operate within legal frameworks.'
  },
  {
    name: 'Estates, Trusts & Wills',
    icon: Home,
    description: 'Professional estate planning, will drafting, trust administration, and deceased estate management. We secure your legacy for future generations.'
  },
  {
    name: 'Medical Negligence',
    icon: Stethoscope,
    description: 'Specialized representation for victims of medical malpractice and hospital negligence. We pursue compensation for injuries caused by substandard care.'
  },
  {
    name: 'Road Accident Fund Claims',
    icon: Car,
    description: 'Expert assistance with RAF claims for injuries sustained in motor vehicle accidents. We maximize your compensation and handle all paperwork.'
  },
  {
    name: 'Taxation Matters',
    icon: Calculator,
    description: 'Comprehensive tax law services including disputes with SARS, tax planning, and compliance matters. We help you navigate complex tax regulations.'
  },
  {
    name: 'Company Secretary Services',
    icon: Building,
    description: 'Professional company secretarial services ensuring corporate compliance, governance, and regulatory filings. We keep your business compliant.'
  },
  {
    name: 'Drafting Of Contracts',
    icon: PenTool,
    description: 'Precise drafting and review of all types of contracts and legal agreements. We ensure your interests are protected in every transaction.'
  }
];
