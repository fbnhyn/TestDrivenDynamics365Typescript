interface DisplayString_Base extends WebEntity {
  componentstate?: componentstate | null;
  createdon?: Date | null;
  customcomment?: string | null;
  customdisplaystring?: string | null;
  displaystringid?: string | null;
  displaystringidunique?: string | null;
  displaystringkey?: string | null;
  formatparameters?: number | null;
  ismanaged?: boolean | null;
  languagecode?: number | null;
  modifiedon?: Date | null;
  overwritetime?: Date | null;
  publisheddisplaystring?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface DisplayString_Relationships {
  DisplayString_AsyncOperations?: AsyncOperation_Result[] | null;
  DisplayString_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  DisplayString_DisplayStringMaps?: DisplayStringMap_Result[] | null;
  userentityinstancedata_displaystring?: UserEntityInstanceData_Result[] | null;
}
interface DisplayString extends DisplayString_Base, DisplayString_Relationships {
}
interface DisplayString_Create extends DisplayString {
}
interface DisplayString_Update extends DisplayString {
}
interface DisplayString_Select {
  componentstate: WebAttribute<DisplayString_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<DisplayString_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<DisplayString_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<DisplayString_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  customcomment: WebAttribute<DisplayString_Select, { customcomment: string | null }, {  }>;
  customdisplaystring: WebAttribute<DisplayString_Select, { customdisplaystring: string | null }, {  }>;
  displaystringid: WebAttribute<DisplayString_Select, { displaystringid: string | null }, {  }>;
  displaystringidunique: WebAttribute<DisplayString_Select, { displaystringidunique: string | null }, {  }>;
  displaystringkey: WebAttribute<DisplayString_Select, { displaystringkey: string | null }, {  }>;
  formatparameters: WebAttribute<DisplayString_Select, { formatparameters: number | null }, {  }>;
  ismanaged: WebAttribute<DisplayString_Select, { ismanaged: boolean | null }, {  }>;
  languagecode: WebAttribute<DisplayString_Select, { languagecode: number | null }, {  }>;
  modifiedby_guid: WebAttribute<DisplayString_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<DisplayString_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<DisplayString_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<DisplayString_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<DisplayString_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  publisheddisplaystring: WebAttribute<DisplayString_Select, { publisheddisplaystring: string | null }, {  }>;
  solutionid: WebAttribute<DisplayString_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<DisplayString_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<DisplayString_Select, { versionnumber: number | null }, {  }>;
}
interface DisplayString_Filter {
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  customcomment: string;
  customdisplaystring: string;
  displaystringid: XQW.Guid;
  displaystringidunique: XQW.Guid;
  displaystringkey: string;
  formatparameters: number;
  ismanaged: boolean;
  languagecode: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  publisheddisplaystring: string;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface DisplayString_Expand {
  DisplayString_AsyncOperations: WebExpand<DisplayString_Expand, AsyncOperation_Select, AsyncOperation_Filter, { DisplayString_AsyncOperations: AsyncOperation_Result[] }>;
  DisplayString_BulkDeleteFailures: WebExpand<DisplayString_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { DisplayString_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  DisplayString_DisplayStringMaps: WebExpand<DisplayString_Expand, DisplayStringMap_Select, DisplayStringMap_Filter, { DisplayString_DisplayStringMaps: DisplayStringMap_Result[] }>;
  createdby: WebExpand<DisplayString_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<DisplayString_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<DisplayString_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<DisplayString_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<DisplayString_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_displaystring: WebExpand<DisplayString_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_displaystring: UserEntityInstanceData_Result[] }>;
}
interface DisplayString_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
}
interface DisplayString_Result extends DisplayString_Base, DisplayString_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface DisplayString_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface DisplayString_RelatedMany {
  DisplayString_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  DisplayString_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  DisplayString_DisplayStringMaps: WebMappingRetrieve<DisplayStringMap_Select,DisplayStringMap_Expand,DisplayStringMap_Filter,DisplayStringMap_Fixed,DisplayStringMap_Result,DisplayStringMap_FormattedResult>;
  userentityinstancedata_displaystring: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  displaystrings: WebMappingRetrieve<DisplayString_Select,DisplayString_Expand,DisplayString_Filter,DisplayString_Fixed,DisplayString_Result,DisplayString_FormattedResult>;
}
interface WebEntitiesRelated {
  displaystrings: WebMappingRelated<DisplayString_RelatedOne,DisplayString_RelatedMany>;
}
interface WebEntitiesCUDA {
  displaystrings: WebMappingCUDA<DisplayString_Create,DisplayString_Update,DisplayString_Select>;
}
