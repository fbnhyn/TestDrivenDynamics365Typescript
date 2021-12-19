interface msdyn_assetcategorytemplateassociation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_assetcategorytemplateassociationid?: string | null;
  msdyn_name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_assetcategorytemplateassociation_statecode | null;
  statuscode?: msdyn_assetcategorytemplateassociation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_assetcategorytemplateassociation_Relationships {
  msdyn_assetcategorytemplateassociation_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_assetcategorytemplateassociation_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_assetcategorytemplateassociation_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_assetcategorytemplateassociation_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_assetcategorytemplateassociation_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_assetcategorytemplateassociation_SyncErrors?: SyncError_Result[] | null;
  msdyn_assetcategorytemplateassociation_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_assetcategorytemplateassociation extends msdyn_assetcategorytemplateassociation_Base, msdyn_assetcategorytemplateassociation_Relationships {
  msdyn_customerassetcategory_bind$msdyn_customerassetcategories?: string | null;
  msdyn_propertytemplate_bind$msdyn_templateforpropertieses?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_assetcategorytemplateassociation_Create extends msdyn_assetcategorytemplateassociation {
}
interface msdyn_assetcategorytemplateassociation_Update extends msdyn_assetcategorytemplateassociation {
}
interface msdyn_assetcategorytemplateassociation_Select {
  createdby_guid: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_assetcategorytemplateassociationid: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { msdyn_assetcategorytemplateassociationid: string | null }, {  }>;
  msdyn_customerassetcategory_guid: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { msdyn_customerassetcategory_guid: string | null }, { msdyn_customerassetcategory_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { msdyn_name: string | null }, {  }>;
  msdyn_propertytemplate_guid: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { msdyn_propertytemplate_guid: string | null }, { msdyn_propertytemplate_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { statecode: msdyn_assetcategorytemplateassociation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { statuscode: msdyn_assetcategorytemplateassociation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_assetcategorytemplateassociation_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_assetcategorytemplateassociation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_assetcategorytemplateassociationid: XQW.Guid;
  msdyn_customerassetcategory_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_propertytemplate_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_assetcategorytemplateassociation_statecode;
  statuscode: msdyn_assetcategorytemplateassociation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_assetcategorytemplateassociation_Expand {
  createdby: WebExpand<msdyn_assetcategorytemplateassociation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_assetcategorytemplateassociation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_assetcategorytemplateassociation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_assetcategorytemplateassociation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_assetcategorytemplateassociation_AsyncOperations: WebExpand<msdyn_assetcategorytemplateassociation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_assetcategorytemplateassociation_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_assetcategorytemplateassociation_BulkDeleteFailures: WebExpand<msdyn_assetcategorytemplateassociation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_assetcategorytemplateassociation_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_assetcategorytemplateassociation_MailboxTrackingFolders: WebExpand<msdyn_assetcategorytemplateassociation_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_assetcategorytemplateassociation_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_assetcategorytemplateassociation_PrincipalObjectAttributeAccesses: WebExpand<msdyn_assetcategorytemplateassociation_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_assetcategorytemplateassociation_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_assetcategorytemplateassociation_ProcessSession: WebExpand<msdyn_assetcategorytemplateassociation_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_assetcategorytemplateassociation_ProcessSession: ProcessSession_Result[] }>;
  msdyn_assetcategorytemplateassociation_SyncErrors: WebExpand<msdyn_assetcategorytemplateassociation_Expand, SyncError_Select, SyncError_Filter, { msdyn_assetcategorytemplateassociation_SyncErrors: SyncError_Result[] }>;
  msdyn_assetcategorytemplateassociation_UserEntityInstanceDatas: WebExpand<msdyn_assetcategorytemplateassociation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_assetcategorytemplateassociation_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_customerassetcategory: WebExpand<msdyn_assetcategorytemplateassociation_Expand, msdyn_customerassetcategory_Select, msdyn_customerassetcategory_Filter, { msdyn_customerassetcategory: msdyn_customerassetcategory_Result }>;
  msdyn_propertytemplate: WebExpand<msdyn_assetcategorytemplateassociation_Expand, msdyn_templateforproperties_Select, msdyn_templateforproperties_Filter, { msdyn_propertytemplate: msdyn_templateforproperties_Result }>;
  ownerid: WebExpand<msdyn_assetcategorytemplateassociation_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_assetcategorytemplateassociation_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_assetcategorytemplateassociation_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_assetcategorytemplateassociation_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_assetcategorytemplateassociation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_customerassetcategory_formatted?: string;
  msdyn_propertytemplate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_assetcategorytemplateassociation_Result extends msdyn_assetcategorytemplateassociation_Base, msdyn_assetcategorytemplateassociation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_customerassetcategory_guid: string | null;
  msdyn_propertytemplate_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_assetcategorytemplateassociation_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_customerassetcategory: WebMappingRetrieve<msdyn_customerassetcategory_Select,msdyn_customerassetcategory_Expand,msdyn_customerassetcategory_Filter,msdyn_customerassetcategory_Fixed,msdyn_customerassetcategory_Result,msdyn_customerassetcategory_FormattedResult>;
  msdyn_propertytemplate: WebMappingRetrieve<msdyn_templateforproperties_Select,msdyn_templateforproperties_Expand,msdyn_templateforproperties_Filter,msdyn_templateforproperties_Fixed,msdyn_templateforproperties_Result,msdyn_templateforproperties_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_assetcategorytemplateassociation_RelatedMany {
  msdyn_assetcategorytemplateassociation_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_assetcategorytemplateassociation_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_assetcategorytemplateassociation_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_assetcategorytemplateassociation_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_assetcategorytemplateassociation_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_assetcategorytemplateassociation_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_assetcategorytemplateassociation_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_assetcategorytemplateassociations: WebMappingRetrieve<msdyn_assetcategorytemplateassociation_Select,msdyn_assetcategorytemplateassociation_Expand,msdyn_assetcategorytemplateassociation_Filter,msdyn_assetcategorytemplateassociation_Fixed,msdyn_assetcategorytemplateassociation_Result,msdyn_assetcategorytemplateassociation_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_assetcategorytemplateassociations: WebMappingRelated<msdyn_assetcategorytemplateassociation_RelatedOne,msdyn_assetcategorytemplateassociation_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_assetcategorytemplateassociations: WebMappingCUDA<msdyn_assetcategorytemplateassociation_Create,msdyn_assetcategorytemplateassociation_Update,msdyn_assetcategorytemplateassociation_Select>;
}
