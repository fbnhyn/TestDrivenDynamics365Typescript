interface msdyn_propertytemplateassociation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_propertytemplateassociationid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_propertytemplateassociation_statecode | null;
  statuscode?: msdyn_propertytemplateassociation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_propertytemplateassociation_Relationships {
  msdyn_propertytemplateassociation_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_propertytemplateassociation_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_propertytemplateassociation_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_propertytemplateassociation_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_propertytemplateassociation_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_propertytemplateassociation_SyncErrors?: SyncError_Result[] | null;
  msdyn_propertytemplateassociation_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_propertytemplateassociation extends msdyn_propertytemplateassociation_Base, msdyn_propertytemplateassociation_Relationships {
  msdyn_property_bind$msdyn_properties?: string | null;
  msdyn_propertytemplate_bind$msdyn_templateforpropertieses?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_propertytemplateassociation_Create extends msdyn_propertytemplateassociation {
}
interface msdyn_propertytemplateassociation_Update extends msdyn_propertytemplateassociation {
}
interface msdyn_propertytemplateassociation_Select {
  createdby_guid: WebAttribute<msdyn_propertytemplateassociation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_propertytemplateassociation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_propertytemplateassociation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_propertytemplateassociation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_propertytemplateassociation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_propertytemplateassociation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_propertytemplateassociation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_propertytemplateassociation_Select, { msdyn_name: string | null }, {  }>;
  msdyn_property_guid: WebAttribute<msdyn_propertytemplateassociation_Select, { msdyn_property_guid: string | null }, { msdyn_property_formatted?: string }>;
  msdyn_propertytemplate_guid: WebAttribute<msdyn_propertytemplateassociation_Select, { msdyn_propertytemplate_guid: string | null }, { msdyn_propertytemplate_formatted?: string }>;
  msdyn_propertytemplateassociationid: WebAttribute<msdyn_propertytemplateassociation_Select, { msdyn_propertytemplateassociationid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_propertytemplateassociation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_propertytemplateassociation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_propertytemplateassociation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_propertytemplateassociation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_propertytemplateassociation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_propertytemplateassociation_Select, { statecode: msdyn_propertytemplateassociation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_propertytemplateassociation_Select, { statuscode: msdyn_propertytemplateassociation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_propertytemplateassociation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_propertytemplateassociation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_propertytemplateassociation_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_propertytemplateassociation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_property_guid: XQW.Guid;
  msdyn_propertytemplate_guid: XQW.Guid;
  msdyn_propertytemplateassociationid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_propertytemplateassociation_statecode;
  statuscode: msdyn_propertytemplateassociation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_propertytemplateassociation_Expand {
  createdby: WebExpand<msdyn_propertytemplateassociation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_propertytemplateassociation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_propertytemplateassociation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_propertytemplateassociation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_property: WebExpand<msdyn_propertytemplateassociation_Expand, msdyn_property_Select, msdyn_property_Filter, { msdyn_property: msdyn_property_Result }>;
  msdyn_propertytemplate: WebExpand<msdyn_propertytemplateassociation_Expand, msdyn_templateforproperties_Select, msdyn_templateforproperties_Filter, { msdyn_propertytemplate: msdyn_templateforproperties_Result }>;
  msdyn_propertytemplateassociation_AsyncOperations: WebExpand<msdyn_propertytemplateassociation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_propertytemplateassociation_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_propertytemplateassociation_BulkDeleteFailures: WebExpand<msdyn_propertytemplateassociation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_propertytemplateassociation_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_propertytemplateassociation_MailboxTrackingFolders: WebExpand<msdyn_propertytemplateassociation_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_propertytemplateassociation_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_propertytemplateassociation_PrincipalObjectAttributeAccesses: WebExpand<msdyn_propertytemplateassociation_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_propertytemplateassociation_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_propertytemplateassociation_ProcessSession: WebExpand<msdyn_propertytemplateassociation_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_propertytemplateassociation_ProcessSession: ProcessSession_Result[] }>;
  msdyn_propertytemplateassociation_SyncErrors: WebExpand<msdyn_propertytemplateassociation_Expand, SyncError_Select, SyncError_Filter, { msdyn_propertytemplateassociation_SyncErrors: SyncError_Result[] }>;
  msdyn_propertytemplateassociation_UserEntityInstanceDatas: WebExpand<msdyn_propertytemplateassociation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_propertytemplateassociation_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_propertytemplateassociation_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_propertytemplateassociation_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_propertytemplateassociation_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_propertytemplateassociation_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_propertytemplateassociation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_property_formatted?: string;
  msdyn_propertytemplate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_propertytemplateassociation_Result extends msdyn_propertytemplateassociation_Base, msdyn_propertytemplateassociation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_property_guid: string | null;
  msdyn_propertytemplate_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_propertytemplateassociation_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_property: WebMappingRetrieve<msdyn_property_Select,msdyn_property_Expand,msdyn_property_Filter,msdyn_property_Fixed,msdyn_property_Result,msdyn_property_FormattedResult>;
  msdyn_propertytemplate: WebMappingRetrieve<msdyn_templateforproperties_Select,msdyn_templateforproperties_Expand,msdyn_templateforproperties_Filter,msdyn_templateforproperties_Fixed,msdyn_templateforproperties_Result,msdyn_templateforproperties_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_propertytemplateassociation_RelatedMany {
  msdyn_propertytemplateassociation_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_propertytemplateassociation_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_propertytemplateassociation_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_propertytemplateassociation_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_propertytemplateassociation_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_propertytemplateassociation_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_propertytemplateassociation_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_propertytemplateassociations: WebMappingRetrieve<msdyn_propertytemplateassociation_Select,msdyn_propertytemplateassociation_Expand,msdyn_propertytemplateassociation_Filter,msdyn_propertytemplateassociation_Fixed,msdyn_propertytemplateassociation_Result,msdyn_propertytemplateassociation_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_propertytemplateassociations: WebMappingRelated<msdyn_propertytemplateassociation_RelatedOne,msdyn_propertytemplateassociation_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_propertytemplateassociations: WebMappingCUDA<msdyn_propertytemplateassociation_Create,msdyn_propertytemplateassociation_Update,msdyn_propertytemplateassociation_Select>;
}
