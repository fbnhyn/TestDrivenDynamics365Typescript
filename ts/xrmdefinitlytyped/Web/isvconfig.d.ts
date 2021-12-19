interface IsvConfig_Base extends WebEntity {
  configxml?: string | null;
  createdon?: Date | null;
  isvconfigid?: string | null;
  modifiedon?: Date | null;
  organizationid?: string | null;
  versionnumber?: number | null;
}
interface IsvConfig_Relationships {
  IsvConfig_AsyncOperations?: AsyncOperation_Result[] | null;
  IsvConfig_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  organizationid_organization?: Organization_Result | null;
  userentityinstancedata_isvconfig?: UserEntityInstanceData_Result[] | null;
}
interface IsvConfig extends IsvConfig_Base, IsvConfig_Relationships {
}
interface IsvConfig_Create extends IsvConfig {
}
interface IsvConfig_Update extends IsvConfig {
}
interface IsvConfig_Select {
  configxml: WebAttribute<IsvConfig_Select, { configxml: string | null }, {  }>;
  createdby_guid: WebAttribute<IsvConfig_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<IsvConfig_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<IsvConfig_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  isvconfigid: WebAttribute<IsvConfig_Select, { isvconfigid: string | null }, {  }>;
  modifiedby_guid: WebAttribute<IsvConfig_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<IsvConfig_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<IsvConfig_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid: WebAttribute<IsvConfig_Select, { organizationid: string | null }, {  }>;
  versionnumber: WebAttribute<IsvConfig_Select, { versionnumber: number | null }, {  }>;
}
interface IsvConfig_Filter {
  configxml: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  isvconfigid: XQW.Guid;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid: XQW.Guid;
  versionnumber: number;
}
interface IsvConfig_Expand {
  IsvConfig_AsyncOperations: WebExpand<IsvConfig_Expand, AsyncOperation_Select, AsyncOperation_Filter, { IsvConfig_AsyncOperations: AsyncOperation_Result[] }>;
  IsvConfig_BulkDeleteFailures: WebExpand<IsvConfig_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { IsvConfig_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  createdby: WebExpand<IsvConfig_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<IsvConfig_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<IsvConfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<IsvConfig_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid_organization: WebExpand<IsvConfig_Expand, Organization_Select, Organization_Filter, { organizationid_organization: Organization_Result }>;
  userentityinstancedata_isvconfig: WebExpand<IsvConfig_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_isvconfig: UserEntityInstanceData_Result[] }>;
}
interface IsvConfig_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
}
interface IsvConfig_Result extends IsvConfig_Base, IsvConfig_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
}
interface IsvConfig_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid_organization: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface IsvConfig_RelatedMany {
  IsvConfig_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  IsvConfig_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  userentityinstancedata_isvconfig: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  isvconfigs: WebMappingRetrieve<IsvConfig_Select,IsvConfig_Expand,IsvConfig_Filter,IsvConfig_Fixed,IsvConfig_Result,IsvConfig_FormattedResult>;
}
interface WebEntitiesRelated {
  isvconfigs: WebMappingRelated<IsvConfig_RelatedOne,IsvConfig_RelatedMany>;
}
interface WebEntitiesCUDA {
  isvconfigs: WebMappingCUDA<IsvConfig_Create,IsvConfig_Update,IsvConfig_Select>;
}
