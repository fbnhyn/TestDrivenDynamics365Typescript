interface msdyn_templateforproperties_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_templateforpropertiesid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_templateforproperties_statecode | null;
  statuscode?: msdyn_templateforproperties_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_templateforproperties_Relationships {
  msdyn_msdyn_templateforproperties_msdyn_assetcategorytemplateassociation_propertytemplate?: msdyn_assetcategorytemplateassociation_Result[] | null;
  msdyn_msdyn_templateforproperties_msdyn_assettemplateassociation_propertytemplate?: msdyn_assettemplateassociation_Result[] | null;
  msdyn_msdyn_templateforproperties_msdyn_propertytemplateassociation_propertytemplate?: msdyn_propertytemplateassociation_Result[] | null;
  msdyn_templateforproperties_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_templateforproperties_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_templateforproperties_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_templateforproperties_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_templateforproperties_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_templateforproperties_SyncErrors?: SyncError_Result[] | null;
  msdyn_templateforproperties_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_templateforproperties extends msdyn_templateforproperties_Base, msdyn_templateforproperties_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_templateforproperties_Create extends msdyn_templateforproperties {
}
interface msdyn_templateforproperties_Update extends msdyn_templateforproperties {
}
interface msdyn_templateforproperties_Select {
  createdby_guid: WebAttribute<msdyn_templateforproperties_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_templateforproperties_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_templateforproperties_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_templateforproperties_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_templateforproperties_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_templateforproperties_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_templateforproperties_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_templateforproperties_Select, { msdyn_name: string | null }, {  }>;
  msdyn_templateforpropertiesid: WebAttribute<msdyn_templateforproperties_Select, { msdyn_templateforpropertiesid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_templateforproperties_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_templateforproperties_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_templateforproperties_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_templateforproperties_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_templateforproperties_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_templateforproperties_Select, { statecode: msdyn_templateforproperties_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_templateforproperties_Select, { statuscode: msdyn_templateforproperties_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_templateforproperties_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_templateforproperties_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_templateforproperties_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_templateforproperties_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_templateforpropertiesid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_templateforproperties_statecode;
  statuscode: msdyn_templateforproperties_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_templateforproperties_Expand {
  createdby: WebExpand<msdyn_templateforproperties_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_templateforproperties_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_templateforproperties_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_templateforproperties_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_templateforproperties_msdyn_assetcategorytemplateassociation_propertytemplate: WebExpand<msdyn_templateforproperties_Expand, msdyn_assetcategorytemplateassociation_Select, msdyn_assetcategorytemplateassociation_Filter, { msdyn_msdyn_templateforproperties_msdyn_assetcategorytemplateassociation_propertytemplate: msdyn_assetcategorytemplateassociation_Result[] }>;
  msdyn_msdyn_templateforproperties_msdyn_assettemplateassociation_propertytemplate: WebExpand<msdyn_templateforproperties_Expand, msdyn_assettemplateassociation_Select, msdyn_assettemplateassociation_Filter, { msdyn_msdyn_templateforproperties_msdyn_assettemplateassociation_propertytemplate: msdyn_assettemplateassociation_Result[] }>;
  msdyn_msdyn_templateforproperties_msdyn_propertytemplateassociation_propertytemplate: WebExpand<msdyn_templateforproperties_Expand, msdyn_propertytemplateassociation_Select, msdyn_propertytemplateassociation_Filter, { msdyn_msdyn_templateforproperties_msdyn_propertytemplateassociation_propertytemplate: msdyn_propertytemplateassociation_Result[] }>;
  msdyn_templateforproperties_AsyncOperations: WebExpand<msdyn_templateforproperties_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_templateforproperties_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_templateforproperties_BulkDeleteFailures: WebExpand<msdyn_templateforproperties_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_templateforproperties_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_templateforproperties_MailboxTrackingFolders: WebExpand<msdyn_templateforproperties_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_templateforproperties_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_templateforproperties_PrincipalObjectAttributeAccesses: WebExpand<msdyn_templateforproperties_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_templateforproperties_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_templateforproperties_ProcessSession: WebExpand<msdyn_templateforproperties_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_templateforproperties_ProcessSession: ProcessSession_Result[] }>;
  msdyn_templateforproperties_SyncErrors: WebExpand<msdyn_templateforproperties_Expand, SyncError_Select, SyncError_Filter, { msdyn_templateforproperties_SyncErrors: SyncError_Result[] }>;
  msdyn_templateforproperties_UserEntityInstanceDatas: WebExpand<msdyn_templateforproperties_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_templateforproperties_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_templateforproperties_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_templateforproperties_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_templateforproperties_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_templateforproperties_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_templateforproperties_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_templateforproperties_Result extends msdyn_templateforproperties_Base, msdyn_templateforproperties_Relationships {
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
interface msdyn_templateforproperties_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_templateforproperties_RelatedMany {
  msdyn_msdyn_templateforproperties_msdyn_assetcategorytemplateassociation_propertytemplate: WebMappingRetrieve<msdyn_assetcategorytemplateassociation_Select,msdyn_assetcategorytemplateassociation_Expand,msdyn_assetcategorytemplateassociation_Filter,msdyn_assetcategorytemplateassociation_Fixed,msdyn_assetcategorytemplateassociation_Result,msdyn_assetcategorytemplateassociation_FormattedResult>;
  msdyn_msdyn_templateforproperties_msdyn_assettemplateassociation_propertytemplate: WebMappingRetrieve<msdyn_assettemplateassociation_Select,msdyn_assettemplateassociation_Expand,msdyn_assettemplateassociation_Filter,msdyn_assettemplateassociation_Fixed,msdyn_assettemplateassociation_Result,msdyn_assettemplateassociation_FormattedResult>;
  msdyn_msdyn_templateforproperties_msdyn_propertytemplateassociation_propertytemplate: WebMappingRetrieve<msdyn_propertytemplateassociation_Select,msdyn_propertytemplateassociation_Expand,msdyn_propertytemplateassociation_Filter,msdyn_propertytemplateassociation_Fixed,msdyn_propertytemplateassociation_Result,msdyn_propertytemplateassociation_FormattedResult>;
  msdyn_templateforproperties_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_templateforproperties_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_templateforproperties_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_templateforproperties_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_templateforproperties_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_templateforproperties_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_templateforproperties_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_templateforpropertieses: WebMappingRetrieve<msdyn_templateforproperties_Select,msdyn_templateforproperties_Expand,msdyn_templateforproperties_Filter,msdyn_templateforproperties_Fixed,msdyn_templateforproperties_Result,msdyn_templateforproperties_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_templateforpropertieses: WebMappingRelated<msdyn_templateforproperties_RelatedOne,msdyn_templateforproperties_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_templateforpropertieses: WebMappingCUDA<msdyn_templateforproperties_Create,msdyn_templateforproperties_Update,msdyn_templateforproperties_Select>;
}
