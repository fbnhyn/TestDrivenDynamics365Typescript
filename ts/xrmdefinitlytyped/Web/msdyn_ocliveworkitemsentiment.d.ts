interface msdyn_ocliveworkitemsentiment_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_ocliveworkitemsentimentid?: string | null;
  msdyn_predictedlanguage?: string | null;
  msdyn_sentimentmodelversion?: string | null;
  msdyn_sentimentpulse?: number | null;
  msdyn_sentimenttransition?: number | null;
  msdyn_sentimentzone?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocliveworkitemsentiment_statecode | null;
  statuscode?: msdyn_ocliveworkitemsentiment_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocliveworkitemsentiment_Relationships {
  msdyn_ocliveworkitemsentiment_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocliveworkitemsentiment_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocliveworkitemsentiment_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocliveworkitemsentiment_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocliveworkitemsentiment_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocliveworkitemsentiment_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocliveworkitemsentiment_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocliveworkitemsentiment extends msdyn_ocliveworkitemsentiment_Base, msdyn_ocliveworkitemsentiment_Relationships {
  msdyn_ocliveworkitemid_bind$msdyn_ocliveworkitems?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocliveworkitemsentiment_Create extends msdyn_ocliveworkitemsentiment {
}
interface msdyn_ocliveworkitemsentiment_Update extends msdyn_ocliveworkitemsentiment {
}
interface msdyn_ocliveworkitemsentiment_Select {
  createdby_guid: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocliveworkitemid_guid: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { msdyn_ocliveworkitemid_guid: string | null }, { msdyn_ocliveworkitemid_formatted?: string }>;
  msdyn_ocliveworkitemsentimentid: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { msdyn_ocliveworkitemsentimentid: string | null }, {  }>;
  msdyn_predictedlanguage: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { msdyn_predictedlanguage: string | null }, {  }>;
  msdyn_sentimentmodelversion: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { msdyn_sentimentmodelversion: string | null }, {  }>;
  msdyn_sentimentpulse: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { msdyn_sentimentpulse: number | null }, {  }>;
  msdyn_sentimenttransition: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { msdyn_sentimenttransition: number | null }, {  }>;
  msdyn_sentimentzone: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { msdyn_sentimentzone: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { statecode: msdyn_ocliveworkitemsentiment_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { statuscode: msdyn_ocliveworkitemsentiment_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocliveworkitemsentiment_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocliveworkitemsentiment_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_name: string;
  msdyn_ocliveworkitemid_guid: XQW.Guid;
  msdyn_ocliveworkitemsentimentid: XQW.Guid;
  msdyn_predictedlanguage: string;
  msdyn_sentimentmodelversion: string;
  msdyn_sentimentpulse: number;
  msdyn_sentimenttransition: number;
  msdyn_sentimentzone: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocliveworkitemsentiment_statecode;
  statuscode: msdyn_ocliveworkitemsentiment_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocliveworkitemsentiment_Expand {
  createdby: WebExpand<msdyn_ocliveworkitemsentiment_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocliveworkitemsentiment_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocliveworkitemsentiment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocliveworkitemsentiment_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_ocliveworkitemid: WebExpand<msdyn_ocliveworkitemsentiment_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_ocliveworkitemid: msdyn_ocliveworkitem_Result }>;
  msdyn_ocliveworkitemsentiment_AsyncOperations: WebExpand<msdyn_ocliveworkitemsentiment_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocliveworkitemsentiment_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocliveworkitemsentiment_BulkDeleteFailures: WebExpand<msdyn_ocliveworkitemsentiment_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocliveworkitemsentiment_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocliveworkitemsentiment_MailboxTrackingFolders: WebExpand<msdyn_ocliveworkitemsentiment_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocliveworkitemsentiment_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocliveworkitemsentiment_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocliveworkitemsentiment_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocliveworkitemsentiment_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocliveworkitemsentiment_ProcessSession: WebExpand<msdyn_ocliveworkitemsentiment_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocliveworkitemsentiment_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocliveworkitemsentiment_SyncErrors: WebExpand<msdyn_ocliveworkitemsentiment_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocliveworkitemsentiment_SyncErrors: SyncError_Result[] }>;
  msdyn_ocliveworkitemsentiment_UserEntityInstanceDatas: WebExpand<msdyn_ocliveworkitemsentiment_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocliveworkitemsentiment_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_ocliveworkitemsentiment_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocliveworkitemsentiment_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocliveworkitemsentiment_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocliveworkitemsentiment_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocliveworkitemsentiment_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_ocliveworkitemid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocliveworkitemsentiment_Result extends msdyn_ocliveworkitemsentiment_Base, msdyn_ocliveworkitemsentiment_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_ocliveworkitemid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_ocliveworkitemsentiment_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ocliveworkitemid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocliveworkitemsentiment_RelatedMany {
  msdyn_ocliveworkitemsentiment_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocliveworkitemsentiment_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocliveworkitemsentiment_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocliveworkitemsentiment_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocliveworkitemsentiment_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocliveworkitemsentiment_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocliveworkitemsentiment_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocliveworkitemsentiments: WebMappingRetrieve<msdyn_ocliveworkitemsentiment_Select,msdyn_ocliveworkitemsentiment_Expand,msdyn_ocliveworkitemsentiment_Filter,msdyn_ocliveworkitemsentiment_Fixed,msdyn_ocliveworkitemsentiment_Result,msdyn_ocliveworkitemsentiment_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocliveworkitemsentiments: WebMappingRelated<msdyn_ocliveworkitemsentiment_RelatedOne,msdyn_ocliveworkitemsentiment_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocliveworkitemsentiments: WebMappingCUDA<msdyn_ocliveworkitemsentiment_Create,msdyn_ocliveworkitemsentiment_Update,msdyn_ocliveworkitemsentiment_Select>;
}
