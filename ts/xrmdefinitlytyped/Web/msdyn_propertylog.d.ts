interface msdyn_propertylog_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_booleanvalue?: boolean | null;
  msdyn_datevalue?: Date | null;
  msdyn_delta?: number | null;
  msdyn_islatest?: boolean | null;
  msdyn_name?: string | null;
  msdyn_numbervalue?: number | null;
  msdyn_propertylogid?: string | null;
  msdyn_readingtime?: Date | null;
  msdyn_stringvalue?: string | null;
  msdyn_valuetodisplay?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_propertylog_statecode | null;
  statuscode?: msdyn_propertylog_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_propertylog_Relationships {
  msdyn_propertylog_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_propertylog_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_propertylog_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_propertylog_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_propertylog_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_propertylog_SyncErrors?: SyncError_Result[] | null;
  msdyn_propertylog_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_propertylog extends msdyn_propertylog_Base, msdyn_propertylog_Relationships {
  msdyn_customerasset_bind$msdyn_customerassets?: string | null;
  msdyn_property_bind$msdyn_properties?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_propertylog_Create extends msdyn_propertylog {
}
interface msdyn_propertylog_Update extends msdyn_propertylog {
}
interface msdyn_propertylog_Select {
  createdby_guid: WebAttribute<msdyn_propertylog_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_propertylog_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_propertylog_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_propertylog_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_propertylog_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_propertylog_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_propertylog_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_booleanvalue: WebAttribute<msdyn_propertylog_Select, { msdyn_booleanvalue: boolean | null }, {  }>;
  msdyn_customerasset_guid: WebAttribute<msdyn_propertylog_Select, { msdyn_customerasset_guid: string | null }, { msdyn_customerasset_formatted?: string }>;
  msdyn_datevalue: WebAttribute<msdyn_propertylog_Select, { msdyn_datevalue: Date | null }, { msdyn_datevalue_formatted?: string }>;
  msdyn_delta: WebAttribute<msdyn_propertylog_Select, { msdyn_delta: number | null }, {  }>;
  msdyn_islatest: WebAttribute<msdyn_propertylog_Select, { msdyn_islatest: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_propertylog_Select, { msdyn_name: string | null }, {  }>;
  msdyn_numbervalue: WebAttribute<msdyn_propertylog_Select, { msdyn_numbervalue: number | null }, {  }>;
  msdyn_property_guid: WebAttribute<msdyn_propertylog_Select, { msdyn_property_guid: string | null }, { msdyn_property_formatted?: string }>;
  msdyn_propertylogid: WebAttribute<msdyn_propertylog_Select, { msdyn_propertylogid: string | null }, {  }>;
  msdyn_readingtime: WebAttribute<msdyn_propertylog_Select, { msdyn_readingtime: Date | null }, { msdyn_readingtime_formatted?: string }>;
  msdyn_stringvalue: WebAttribute<msdyn_propertylog_Select, { msdyn_stringvalue: string | null }, {  }>;
  msdyn_valuetodisplay: WebAttribute<msdyn_propertylog_Select, { msdyn_valuetodisplay: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_propertylog_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_propertylog_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_propertylog_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_propertylog_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_propertylog_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_propertylog_Select, { statecode: msdyn_propertylog_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_propertylog_Select, { statuscode: msdyn_propertylog_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_propertylog_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_propertylog_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_propertylog_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_propertylog_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_booleanvalue: boolean;
  msdyn_customerasset_guid: XQW.Guid;
  msdyn_datevalue: Date;
  msdyn_delta: any;
  msdyn_islatest: boolean;
  msdyn_name: string;
  msdyn_numbervalue: any;
  msdyn_property_guid: XQW.Guid;
  msdyn_propertylogid: XQW.Guid;
  msdyn_readingtime: Date;
  msdyn_stringvalue: string;
  msdyn_valuetodisplay: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_propertylog_statecode;
  statuscode: msdyn_propertylog_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_propertylog_Expand {
  createdby: WebExpand<msdyn_propertylog_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_propertylog_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_propertylog_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_propertylog_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_customerasset: WebExpand<msdyn_propertylog_Expand, msdyn_customerasset_Select, msdyn_customerasset_Filter, { msdyn_customerasset: msdyn_customerasset_Result }>;
  msdyn_property: WebExpand<msdyn_propertylog_Expand, msdyn_property_Select, msdyn_property_Filter, { msdyn_property: msdyn_property_Result }>;
  msdyn_propertylog_AsyncOperations: WebExpand<msdyn_propertylog_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_propertylog_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_propertylog_BulkDeleteFailures: WebExpand<msdyn_propertylog_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_propertylog_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_propertylog_MailboxTrackingFolders: WebExpand<msdyn_propertylog_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_propertylog_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_propertylog_PrincipalObjectAttributeAccesses: WebExpand<msdyn_propertylog_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_propertylog_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_propertylog_ProcessSession: WebExpand<msdyn_propertylog_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_propertylog_ProcessSession: ProcessSession_Result[] }>;
  msdyn_propertylog_SyncErrors: WebExpand<msdyn_propertylog_Expand, SyncError_Select, SyncError_Filter, { msdyn_propertylog_SyncErrors: SyncError_Result[] }>;
  msdyn_propertylog_UserEntityInstanceDatas: WebExpand<msdyn_propertylog_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_propertylog_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_propertylog_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_propertylog_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_propertylog_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_propertylog_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_propertylog_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_customerasset_formatted?: string;
  msdyn_datevalue_formatted?: string;
  msdyn_property_formatted?: string;
  msdyn_readingtime_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_propertylog_Result extends msdyn_propertylog_Base, msdyn_propertylog_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_customerasset_guid: string | null;
  msdyn_property_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_propertylog_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_customerasset: WebMappingRetrieve<msdyn_customerasset_Select,msdyn_customerasset_Expand,msdyn_customerasset_Filter,msdyn_customerasset_Fixed,msdyn_customerasset_Result,msdyn_customerasset_FormattedResult>;
  msdyn_property: WebMappingRetrieve<msdyn_property_Select,msdyn_property_Expand,msdyn_property_Filter,msdyn_property_Fixed,msdyn_property_Result,msdyn_property_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_propertylog_RelatedMany {
  msdyn_propertylog_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_propertylog_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_propertylog_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_propertylog_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_propertylog_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_propertylog_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_propertylog_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_propertylogs: WebMappingRetrieve<msdyn_propertylog_Select,msdyn_propertylog_Expand,msdyn_propertylog_Filter,msdyn_propertylog_Fixed,msdyn_propertylog_Result,msdyn_propertylog_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_propertylogs: WebMappingRelated<msdyn_propertylog_RelatedOne,msdyn_propertylog_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_propertylogs: WebMappingCUDA<msdyn_propertylog_Create,msdyn_propertylog_Update,msdyn_propertylog_Select>;
}
