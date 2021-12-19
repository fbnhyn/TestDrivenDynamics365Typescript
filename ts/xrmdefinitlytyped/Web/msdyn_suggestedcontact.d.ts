interface msdyn_suggestedcontact_Base extends WebEntity {
  msdyn_accountidname?: string | null;
  msdyn_accountname?: string | null;
  msdyn_addresscity?: string | null;
  msdyn_addressline1?: string | null;
  msdyn_addressline2?: string | null;
  msdyn_addresspostalcode?: string | null;
  msdyn_companyname?: string | null;
  msdyn_createdon?: Date | null;
  msdyn_description?: string | null;
  msdyn_email?: string | null;
  msdyn_firstname?: string | null;
  msdyn_fullname?: string | null;
  msdyn_jobtitle?: string | null;
  msdyn_lastname?: string | null;
  msdyn_mobilephone?: string | null;
  msdyn_preferredcontactmethodcode?: string | null;
  msdyn_suggestedcontactid?: string | null;
  msdyn_telephone?: string | null;
}
interface msdyn_suggestedcontact_Relationships {
}
interface msdyn_suggestedcontact extends msdyn_suggestedcontact_Base, msdyn_suggestedcontact_Relationships {
}
interface msdyn_suggestedcontact_Create extends msdyn_suggestedcontact {
}
interface msdyn_suggestedcontact_Update extends msdyn_suggestedcontact {
}
interface msdyn_suggestedcontact_Select {
  msdyn_accountid_guid: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_accountid_guid: string | null }, { msdyn_accountid_formatted?: string }>;
  msdyn_accountidname: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_accountidname: string | null }, {  }>;
  msdyn_accountname: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_accountname: string | null }, {  }>;
  msdyn_addresscity: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_addresscity: string | null }, {  }>;
  msdyn_addressline1: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_addressline1: string | null }, {  }>;
  msdyn_addressline2: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_addressline2: string | null }, {  }>;
  msdyn_addresspostalcode: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_addresspostalcode: string | null }, {  }>;
  msdyn_companyname: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_companyname: string | null }, {  }>;
  msdyn_createdon: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_createdon: Date | null }, { msdyn_createdon_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_description: string | null }, {  }>;
  msdyn_email: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_email: string | null }, {  }>;
  msdyn_firstname: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_firstname: string | null }, {  }>;
  msdyn_fullname: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_fullname: string | null }, {  }>;
  msdyn_jobtitle: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_jobtitle: string | null }, {  }>;
  msdyn_lastname: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_lastname: string | null }, {  }>;
  msdyn_mobilephone: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_mobilephone: string | null }, {  }>;
  msdyn_preferredcontactmethodcode: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_preferredcontactmethodcode: string | null }, {  }>;
  msdyn_suggestedcontactid: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_suggestedcontactid: string | null }, {  }>;
  msdyn_telephone: WebAttribute<msdyn_suggestedcontact_Select, { msdyn_telephone: string | null }, {  }>;
}
interface msdyn_suggestedcontact_Filter {
  msdyn_accountid_guid: XQW.Guid;
  msdyn_accountidname: string;
  msdyn_accountname: string;
  msdyn_addresscity: string;
  msdyn_addressline1: string;
  msdyn_addressline2: string;
  msdyn_addresspostalcode: string;
  msdyn_companyname: string;
  msdyn_createdon: Date;
  msdyn_description: string;
  msdyn_email: string;
  msdyn_firstname: string;
  msdyn_fullname: string;
  msdyn_jobtitle: string;
  msdyn_lastname: string;
  msdyn_mobilephone: string;
  msdyn_preferredcontactmethodcode: string;
  msdyn_suggestedcontactid: XQW.Guid;
  msdyn_telephone: string;
}
interface msdyn_suggestedcontact_Expand {
}
interface msdyn_suggestedcontact_FormattedResult {
  msdyn_accountid_formatted?: string;
  msdyn_createdon_formatted?: string;
}
interface msdyn_suggestedcontact_Result extends msdyn_suggestedcontact_Base, msdyn_suggestedcontact_Relationships {
  "@odata.etag": string;
  msdyn_accountid_guid: string | null;
}
interface msdyn_suggestedcontact_RelatedOne {
}
interface msdyn_suggestedcontact_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_suggestedcontacts: WebMappingRetrieve<msdyn_suggestedcontact_Select,msdyn_suggestedcontact_Expand,msdyn_suggestedcontact_Filter,msdyn_suggestedcontact_Fixed,msdyn_suggestedcontact_Result,msdyn_suggestedcontact_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_suggestedcontacts: WebMappingRelated<msdyn_suggestedcontact_RelatedOne,msdyn_suggestedcontact_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_suggestedcontacts: WebMappingCUDA<msdyn_suggestedcontact_Create,msdyn_suggestedcontact_Update,msdyn_suggestedcontact_Select>;
}
