import { Injectable } from '@angular/core';
import { DropdownListModel } from '../model/dropdown-list-model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  GetCurrency() {
    const currencies: DropdownListModel<string, string>[] = [
      { key: "AED", value: "Arabic dirham" },
      { key: "AFN", value: "afghani" },
      { key: "ALL", value: "lek" },
      { key: "AMD", value: "dram" },
      { key: "ANG", value: "Netherlands Antillean guilder" },
      { key: "AOA", value: "kwanza" },
      { key: "ARS", value: "Argentine peso" },
      { key: "AUD", value: "Australian dollar" },
      { key: "AWG", value: "guilder" },
      { key: "AZN", value: "Azerbaijani manat" },
      { key: "BAM", value: "Convertible mark" },
      { key: "BBD", value: "Barbadian dollar" },
      { key: "BDT", value: "taka" },
      { key: "BGN", value: "Bulgarian lev" },
      { key: "BHD", value: "Bahrain dinar" },
      { key: "BIF", value: "Burundi franc" },
      { key: "BMD", value: "Bermudian dollar" },
      { key: "BND", value: "Brunei dollar" },
      { key: "BOB", value: "boliviano" },
      { key: "BRL", value: "Brazilian real" },
      { key: "BSD", value: "Bahamian dollar" },
      { key: "BTN", value: "ngultrum" },
      { key: "BWP", value: "pula" },
      { key: "BYN", value: "Belarusian rubel" },
      { key: "BZD", value: "Belize dollar" },
      { key: "CAD", value: "Canadian dollar" },
      { key: "CDF", value: "Congolais franc" },
      { key: "CFA", value: "CFA Franc" },
      { key: "CHF", value: "Swiss franc" },
      { key: "CKD", value: "Cook dollar" },
      { key: "CLP", value: "Chilean peso" },
      { key: "CNY", value: "Renminbi yuán" },
      { key: "COP", value: "Colombian peso" },
      { key: "CRC", value: "colón" },
      { key: "CUP", value: "Cuban peso" },
      { key: "CVE", value: "Cape Verdean escudo" },
      { key: "CZK", value: "Czech krone" },
      { key: "DJF", value: "Djibouti franc" },
      { key: "DKK", value: "Danish krone" },
      { key: "DOP", value: "Dominican peso" },
      { key: "DZD", value: "Algerian dinar" },
      { key: "EGP", value: "Egypt pound" },
      { key: "ERN", value: "nakfa" },
      { key: "ETB", value: "birr" },
      { key: "EUR", value: "euro" },
      { key: "FJD", value: "Fiji dollar" },
      { key: "FKP", value: "Falklands pound" },
      { key: "FOK", value: "Faroese krona" },
      { key: "GBP", value: "Sterling pound" },
      { key: "GEL", value: "Georgian lari" },
      { key: "GGP", value: "Guernsey pound" },
      { key: "GHS", value: "Ghana cedi" },
      { key: "GIP", value: "Gibraltar pound" },
      { key: "GMD", value: "dalasi" },
      { key: "GNF", value: "Guinea franc" },
      { key: "GTQ", value: "quetzal" },
      { key: "GYD", value: "Guyana dollar" },
      { key: "HKD", value: "Hong Kong dollar" },
      { key: "HNL", value: "lempira" },
      { key: "HTG", value: "gourde" },
      { key: "HUF", value: "Hungarian forint" },
      { key: "IDR", value: "Indonesian rupiah" },
      { key: "ILS", value: "New Israeli sheqel" },
      { key: "IMP", value: "Manx pound" },
      { key: "INR", value: "Indian rupee" },
      { key: "IQD", value: "Iraqi dinar" },
      { key: "IRR", value: "Iranian rial" },
      { key: "ISK", value: "Icelandic krone" },
      { key: "JEP", value: "Jersey Sterling pound" },
      { key: "JMD", value: "Jamaica dollar" },
      { key: "JOD", value: "Jordanian dinar" },
      { key: "JPY", value: "Japanese yen" },
      { key: "KES", value: "Kenyan shilling" },
      { key: "KGS", value: "som" },
      { key: "KHR", value: "Cambodian riel" },
      { key: "KID", value: "Kiribati dollar" },
      { key: "KMF", value: "Comorian franc" },
      { key: "KPW", value: "North Korean won" },
      { key: "KRW", value: "South Korean won" },
      { key: "KWD", value: "Kuwaiti dinar" },
      { key: "KYD", value: "Cayman dollar" },
      { key: "KZT", value: "tenge" },
      { key: "LAK", value: "kip" },
      { key: "LBP", value: "Lebanese pound" },
      { key: "LKR", value: "Sri Lanka rupee" },
      { key: "LRD", value: "Liberian dollar" },
      { key: "LSL", value: "Lesotho loti" },
      { key: "LYD", value: "Libyan dinar" },
      { key: "MAD", value: "Moroccan dirham" },
      { key: "MDL", value: "Moldovan leu" },
      { key: "MGA", value: "Malagasy ariary" },
      { key: "MKD", value: "denar" },
      { key: "MMK", value: "kyat" },
      { key: "MNT", value: "tugrik" },
      { key: "MOP", value: "Macanese pataca" },
      { key: "MRU", value: "Mauritanian ouguiya" },
      { key: "MUR", value: "Mauritian rupee" },
      { key: "MVR", value: "Maldivian rufiyaa" },
      { key: "MWK", value: "Malawian kwacha" },
      { key: "MXN", value: "Mexican peso" },
      { key: "MYR", value: "ringgit" },
      { key: "MZN", value: "metical" },
      { key: "NAD", value: "Namibian dollar" },
      { key: "NGN", value: "naira" },
      { key: "NIO", value: "Córdoba oro" },
      { key: "NOK", value: "Norwegian krone" },
      { key: "NPR", value: "Nepalese rupee" },
      { key: "NZD", value: "New Zealand dollar" },
      { key: "OMR", value: "Omani rial" },
      { key: "PAB", value: "Panamanian balboa" },
      { key: "PEN", value: "Nuevo sol" },
      { key: "PGK", value: "kina" },
      { key: "PHP", value: "Philippine peso" },
      { key: "PKR", value: "Pakistanian rupee" },
      { key: "PLN", value: "zloty" },
      { key: "PYG", value: "guaraní" },
      { key: "QAR", value: "Qatari rial" },
      { key: "RON", value: "Romanian leu" },
      { key: "RSD", value: "Serbian dinar" },
      { key: "RUB", value: "Russian rubel" },
      { key: "RWF", value: "Rwandan franc" },
      { key: "SAR", value: "Saudi rial" },
      { key: "SBD", value: "Salomon dollar" },
      { key: "SCR", value: "Seychelles rupee" },
      { key: "SDG", value: "Sudanese pound" },
      { key: "SEK", value: "Swedish krone" },
      { key: "SGD", value: "Singapore dollar" },
      { key: "SHP", value: "St.-Helena pound" },
      { key: "SLE", value: "Sierra Leonean leone" },
      { key: "SOS", value: "Somalian shilling" },
      { key: "SRD", value: "Surinam dollar" },
      { key: "SSP", value: "South Sudanese pound" },
      { key: "STD", value: "dobra" },
      { key: "SYP", value: "Syrian pound" },
      { key: "SZL", value: "Swazi lilangeni" },
      { key: "THB", value: "Thai baht" },
      { key: "TJS", value: "somoni" },
      { key: "TMT", value: "Turkmen manat" },
      { key: "TND", value: "Tunesian dinar" },
      { key: "TOP", value: "pa'anga" },
      { key: "TRY", value: "Turkish lira" },
      { key: "TTD", value: "Trinidad and Tobago dollar" },
      { key: "TVD", value: "Tuvaluan dollar" },
      { key: "TWD", value: "New Taiwan dollar" },
      { key: "TZS", value: "Tansanian shilling" },
      { key: "UAH", value: "hrywnja" },
      { key: "UGX", value: "Ugandan shilling" },
      { key: "USD", value: "US dollar" },
      { key: "UYU", value: "Uruguay peso" },
      { key: "UZS", value: "Uzbekistan sum" },
      { key: "VED", value: "bolivar digital" },
      { key: "VND", value: "dong" },
      { key: "VUV", value: "vatu" },
      { key: "WST", value: "tala" },
      { key: "XCD", value: "East Caribbean dollar" },
      { key: "YER", value: "Jemen rial" },
      { key: "ZAR", value: "South African rand" },
      { key: "ZMW", value: "Zambian kwacha" },
      { key: "ZWL", value: "Zimbabwe dollar" }
    ];

    return currencies;
  }

  GetInvoiceStatus() {
    const status: DropdownListModel<string, string>[] = [
      { key: 'A', value: 'Approved' },
      { key: 'R', value: 'Rejected' },
      { key: 'D', value: 'Done' },
    ];

    return status
  }
}
