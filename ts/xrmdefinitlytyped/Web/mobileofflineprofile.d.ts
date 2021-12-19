interface MobileOfflineProfile_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  isvalidated?: boolean | null;
  mobileofflineprofileid?: string | null;
  mobileofflineprofileidunique?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  processid?: string | null;
  publishedon?: Date | null;
  selectedentitymetadata?: string | null;
  solutionid?: string | null;
  stageid?: string | null;
  supportingsolutionid?: string | null;
  traversedpath?: string | null;
  versionnumber?: number | null;
}
interface MobileOfflineProfile_Relationships {
  DefaultMobileOfflineProfile_Organization?: Organization_Result[] | null;
  MobileOfflineProfile_MobileOfflineProfileItem?: MobileOfflineProfileItem_Result[] | null;
  MobileOfflineProfile_SystemUser?: SystemUser_Result[] | null;
  mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId?: teammobileofflineprofilemembership_Result[] | null;
  mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId?: usermobileofflineprofilemembership_Result[] | null;
}
interface MobileOfflineProfile extends MobileOfflineProfile_Base, MobileOfflineProfile_Relationships {
}
interface MobileOfflineProfile_Create extends MobileOfflineProfile {
}
interface MobileOfflineProfile_Update extends MobileOfflineProfile {
}
interface MobileOfflineProfile_Select {
  componentstate: WebAttribute<MobileOfflineProfile_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<MobileOfflineProfile_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<MobileOfflineProfile_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<MobileOfflineProfile_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<MobileOfflineProfile_Select, { description: string | null }, {  }>;
  introducedversion: WebAttribute<MobileOfflineProfile_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<MobileOfflineProfile_Select, { ismanaged: boolean | null }, {  }>;
  isvalidated: WebAttribute<MobileOfflineProfile_Select, { isvalidated: boolean | null }, {  }>;
  mobileofflineprofileid: WebAttribute<MobileOfflineProfile_Select, { mobileofflineprofileid: string | null }, {  }>;
  mobileofflineprofileidunique: WebAttribute<MobileOfflineProfile_Select, { mobileofflineprofileidunique: string | null }, {  }>;
  modifiedby_guid: WebAttribute<MobileOfflineProfile_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<MobileOfflineProfile_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<MobileOfflineProfile_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<MobileOfflineProfile_Select, { name: string | null }, {  }>;
  organizationid_guid: WebAttribute<MobileOfflineProfile_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<MobileOfflineProfile_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  processid: WebAttribute<MobileOfflineProfile_Select, { processid: string | null }, {  }>;
  publishedon: WebAttribute<MobileOfflineProfile_Select, { publishedon: Date | null }, { publishedon_formatted?: string }>;
  selectedentitymetadata: WebAttribute<MobileOfflineProfile_Select, { selectedentitymetadata: string | null }, {  }>;
  solutionid: WebAttribute<MobileOfflineProfile_Select, { solutionid: string | null }, {  }>;
  stageid: WebAttribute<MobileOfflineProfile_Select, { stageid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<MobileOfflineProfile_Select, { supportingsolutionid: string | null }, {  }>;
  traversedpath: WebAttribute<MobileOfflineProfile_Select, { traversedpath: string | null }, {  }>;
  versionnumber: WebAttribute<MobileOfflineProfile_Select, { versionnumber: number | null }, {  }>;
}
interface MobileOfflineProfile_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  introducedversion: string;
  ismanaged: boolean;
  isvalidated: boolean;
  mobileofflineprofileid: XQW.Guid;
  mobileofflineprofileidunique: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  processid: XQW.Guid;
  publishedon: Date;
  selectedentitymetadata: string;
  solutionid: XQW.Guid;
  stageid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  traversedpath: string;
  versionnumber: number;
}
interface MobileOfflineProfile_Expand {
  DefaultMobileOfflineProfile_Organization: WebExpand<MobileOfflineProfile_Expand, Organization_Select, Organization_Filter, { DefaultMobileOfflineProfile_Organization: Organization_Result[] }>;
  MobileOfflineProfile_MobileOfflineProfileItem: WebExpand<MobileOfflineProfile_Expand, MobileOfflineProfileItem_Select, MobileOfflineProfileItem_Filter, { MobileOfflineProfile_MobileOfflineProfileItem: MobileOfflineProfileItem_Result[] }>;
  MobileOfflineProfile_SystemUser: WebExpand<MobileOfflineProfile_Expand, SystemUser_Select, SystemUser_Filter, { MobileOfflineProfile_SystemUser: SystemUser_Result[] }>;
  createdby: WebExpand<MobileOfflineProfile_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<MobileOfflineProfile_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId: WebExpand<MobileOfflineProfile_Expand, teammobileofflineprofilemembership_Select, teammobileofflineprofilemembership_Filter, { mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId: teammobileofflineprofilemembership_Result[] }>;
  mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId: WebExpand<MobileOfflineProfile_Expand, usermobileofflineprofilemembership_Select, usermobileofflineprofilemembership_Filter, { mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId: usermobileofflineprofilemembership_Result[] }>;
  modifiedby: WebExpand<MobileOfflineProfile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<MobileOfflineProfile_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<MobileOfflineProfile_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface MobileOfflineProfile_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  publishedon_formatted?: string;
}
interface MobileOfflineProfile_Result extends MobileOfflineProfile_Base, MobileOfflineProfile_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface MobileOfflineProfile_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface MobileOfflineProfile_RelatedMany {
  DefaultMobileOfflineProfile_Organization: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  MobileOfflineProfile_MobileOfflineProfileItem: WebMappingRetrieve<MobileOfflineProfileItem_Select,MobileOfflineProfileItem_Expand,MobileOfflineProfileItem_Filter,MobileOfflineProfileItem_Fixed,MobileOfflineProfileItem_Result,MobileOfflineProfileItem_FormattedResult>;
  MobileOfflineProfile_SystemUser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  mobileofflineprofile_teammobileofflineprofilemembership_MobileOfflineProfileId: WebMappingRetrieve<teammobileofflineprofilemembership_Select,teammobileofflineprofilemembership_Expand,teammobileofflineprofilemembership_Filter,teammobileofflineprofilemembership_Fixed,teammobileofflineprofilemembership_Result,teammobileofflineprofilemembership_FormattedResult>;
  mobileofflineprofile_usermobileofflineprofilemembership_MobileOfflineProfileId: WebMappingRetrieve<usermobileofflineprofilemembership_Select,usermobileofflineprofilemembership_Expand,usermobileofflineprofilemembership_Filter,usermobileofflineprofilemembership_Fixed,usermobileofflineprofilemembership_Result,usermobileofflineprofilemembership_FormattedResult>;
}
interface WebEntitiesRetrieve {
  mobileofflineprofiles: WebMappingRetrieve<MobileOfflineProfile_Select,MobileOfflineProfile_Expand,MobileOfflineProfile_Filter,MobileOfflineProfile_Fixed,MobileOfflineProfile_Result,MobileOfflineProfile_FormattedResult>;
}
interface WebEntitiesRelated {
  mobileofflineprofiles: WebMappingRelated<MobileOfflineProfile_RelatedOne,MobileOfflineProfile_RelatedMany>;
}
interface WebEntitiesCUDA {
  mobileofflineprofiles: WebMappingCUDA<MobileOfflineProfile_Create,MobileOfflineProfile_Update,MobileOfflineProfile_Select>;
}
