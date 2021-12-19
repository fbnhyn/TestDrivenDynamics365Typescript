interface msdyn_property_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_propertyid?: string | null;
  msdyn_propertytype?: msdyn_propertytype | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_property_statecode | null;
  statuscode?: msdyn_property_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_property_Relationships {
  msdyn_msdyn_property_msdyn_propertyassetassociation_property?: msdyn_propertyassetassociation_Result[] | null;
  msdyn_msdyn_property_msdyn_propertylog_property?: msdyn_propertylog_Result[] | null;
  msdyn_msdyn_property_msdyn_propertytemplateassociation_property?: msdyn_propertytemplateassociation_Result[] | null;
  msdyn_property_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_property_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_property_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_property_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_property_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_property_SyncErrors?: SyncError_Result[] | null;
  msdyn_property_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_property extends msdyn_property_Base, msdyn_property_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_property_Create extends msdyn_property {
}
interface msdyn_property_Update extends msdyn_property {
}
interface msdyn_property_Select {
  createdby_guid: WebAttribute<msdyn_property_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_property_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_property_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_property_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_property_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_property_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_property_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_property_Select, { msdyn_name: string | null }, {  }>;
  msdyn_propertyid: WebAttribute<msdyn_property_Select, { msdyn_propertyid: string | null }, {  }>;
  msdyn_propertytype: WebAttribute<msdyn_property_Select, { msdyn_propertytype: msdyn_propertytype | null }, { msdyn_propertytype_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_property_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_property_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_property_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_property_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_property_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_property_Select, { statecode: msdyn_property_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_property_Select, { statuscode: msdyn_property_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_property_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_property_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_property_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_property_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_propertyid: XQW.Guid;
  msdyn_propertytype: msdyn_propertytype;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_property_statecode;
  statuscode: msdyn_property_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_property_Expand {
  createdby: WebExpand<msdyn_property_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_property_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_property_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_property_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_property_msdyn_propertyassetassociation_property: WebExpand<msdyn_property_Expand, msdyn_propertyassetassociation_Select, msdyn_propertyassetassociation_Filter, { msdyn_msdyn_property_msdyn_propertyassetassociation_property: msdyn_propertyassetassociation_Result[] }>;
  msdyn_msdyn_property_msdyn_propertylog_property: WebExpand<msdyn_property_Expand, msdyn_propertylog_Select, msdyn_propertylog_Filter, { msdyn_msdyn_property_msdyn_propertylog_property: msdyn_propertylog_Result[] }>;
  msdyn_msdyn_property_msdyn_propertytemplateassociation_property: WebExpand<msdyn_property_Expand, msdyn_propertytemplateassociation_Select, msdyn_propertytemplateassociation_Filter, { msdyn_msdyn_property_msdyn_propertytemplateassociation_property: msdyn_propertytemplateassociation_Result[] }>;
  msdyn_property_AsyncOperations: WebExpand<msdyn_property_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_property_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_property_BulkDeleteFailures: WebExpand<msdyn_property_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_property_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_property_MailboxTrackingFolders: WebExpand<msdyn_property_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_property_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_property_PrincipalObjectAttributeAccesses: WebExpand<msdyn_property_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_property_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_property_ProcessSession: WebExpand<msdyn_property_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_property_ProcessSession: ProcessSession_Result[] }>;
  msdyn_property_SyncErrors: WebExpand<msdyn_property_Expand, SyncError_Select, SyncError_Filter, { msdyn_property_SyncErrors: SyncError_Result[] }>;
  msdyn_property_UserEntityInstanceDatas: WebExpand<msdyn_property_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_property_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_property_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_property_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_property_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_property_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_property_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_propertytype_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_property_Result extends msdyn_property_Base, msdyn_property_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_property_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_property_RelatedMany {
  msdyn_msdyn_property_msdyn_propertyassetassociation_property: WebMappingRetrieve<msdyn_propertyassetassociation_Select,msdyn_propertyassetassociation_Expand,msdyn_propertyassetassociation_Filter,msdyn_propertyassetassociation_Fixed,msdyn_propertyassetassociation_Result,msdyn_propertyassetassociation_FormattedResult>;
  msdyn_msdyn_property_msdyn_propertylog_property: WebMappingRetrieve<msdyn_propertylog_Select,msdyn_propertylog_Expand,msdyn_propertylog_Filter,msdyn_propertylog_Fixed,msdyn_propertylog_Result,msdyn_propertylog_FormattedResult>;
  msdyn_msdyn_property_msdyn_propertytemplateassociation_property: WebMappingRetrieve<msdyn_propertytemplateassociation_Select,msdyn_propertytemplateassociation_Expand,msdyn_propertytemplateassociation_Filter,msdyn_propertytemplateassociation_Fixed,msdyn_propertytemplateassociation_Result,msdyn_propertytemplateassociation_FormattedResult>;
  msdyn_property_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_property_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_property_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_property_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_property_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_property_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_property_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_properties: WebMappingRetrieve<msdyn_property_Select,msdyn_property_Expand,msdyn_property_Filter,msdyn_property_Fixed,msdyn_property_Result,msdyn_property_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_properties: WebMappingRelated<msdyn_property_RelatedOne,msdyn_property_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_properties: WebMappingCUDA<msdyn_property_Create,msdyn_property_Update,msdyn_property_Select>;
}
