interface msdyn_omnichannelqueue_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_isdefaultqueue?: boolean | null;
  msdyn_name?: string | null;
  msdyn_omnichannelqueueid?: string | null;
  msdyn_priority?: number | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_omnichannelqueue_statecode | null;
  statuscode?: msdyn_omnichannelqueue_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_omnichannelqueue_Relationships {
  msdyn_msdyn_omnichannelqueue_msdyn_liveconversation?: msdyn_liveconversation_Result[] | null;
  msdyn_msdyn_omnichannelqueue_msdyn_ocliveworkitem_queueid?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_msdyn_omnichannelqueue_msdyn_ocsession_queueid?: msdyn_ocsession_Result[] | null;
  msdyn_omnichannelqueue_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_omnichannelqueue_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_omnichannelqueue_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_omnichannelqueue_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_omnichannelqueue_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_omnichannelqueue_SyncErrors?: SyncError_Result[] | null;
  msdyn_omnichannelqueue_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_omnichannelqueue_ocruleitem?: msdyn_ocruleitem_Result[] | null;
  msdyn_systemuser_msdyn_omnichannelqueue?: SystemUser_Result[] | null;
}
interface msdyn_omnichannelqueue extends msdyn_omnichannelqueue_Base, msdyn_omnichannelqueue_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_omnichannelqueue_Create extends msdyn_omnichannelqueue {
}
interface msdyn_omnichannelqueue_Update extends msdyn_omnichannelqueue {
}
interface msdyn_omnichannelqueue_Select {
  createdby_guid: WebAttribute<msdyn_omnichannelqueue_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_omnichannelqueue_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_omnichannelqueue_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_omnichannelqueue_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_omnichannelqueue_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_omnichannelqueue_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_omnichannelqueue_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_isdefaultqueue: WebAttribute<msdyn_omnichannelqueue_Select, { msdyn_isdefaultqueue: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_omnichannelqueue_Select, { msdyn_name: string | null }, {  }>;
  msdyn_omnichannelqueueid: WebAttribute<msdyn_omnichannelqueue_Select, { msdyn_omnichannelqueueid: string | null }, {  }>;
  msdyn_priority: WebAttribute<msdyn_omnichannelqueue_Select, { msdyn_priority: number | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_omnichannelqueue_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_omnichannelqueue_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_omnichannelqueue_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_omnichannelqueue_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_omnichannelqueue_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_omnichannelqueue_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_omnichannelqueue_Select, { statecode: msdyn_omnichannelqueue_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_omnichannelqueue_Select, { statuscode: msdyn_omnichannelqueue_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_omnichannelqueue_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_omnichannelqueue_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_omnichannelqueue_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_omnichannelqueue_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_isdefaultqueue: boolean;
  msdyn_name: string;
  msdyn_omnichannelqueueid: XQW.Guid;
  msdyn_priority: number;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_omnichannelqueue_statecode;
  statuscode: msdyn_omnichannelqueue_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_omnichannelqueue_Expand {
  createdby: WebExpand<msdyn_omnichannelqueue_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_omnichannelqueue_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_omnichannelqueue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_omnichannelqueue_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_omnichannelqueue_msdyn_liveconversation: WebExpand<msdyn_omnichannelqueue_Expand, msdyn_liveconversation_Select, msdyn_liveconversation_Filter, { msdyn_msdyn_omnichannelqueue_msdyn_liveconversation: msdyn_liveconversation_Result[] }>;
  msdyn_msdyn_omnichannelqueue_msdyn_ocliveworkitem_queueid: WebExpand<msdyn_omnichannelqueue_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_msdyn_omnichannelqueue_msdyn_ocliveworkitem_queueid: msdyn_ocliveworkitem_Result[] }>;
  msdyn_msdyn_omnichannelqueue_msdyn_ocsession_queueid: WebExpand<msdyn_omnichannelqueue_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_msdyn_omnichannelqueue_msdyn_ocsession_queueid: msdyn_ocsession_Result[] }>;
  msdyn_omnichannelqueue_AsyncOperations: WebExpand<msdyn_omnichannelqueue_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_omnichannelqueue_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_omnichannelqueue_BulkDeleteFailures: WebExpand<msdyn_omnichannelqueue_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_omnichannelqueue_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_omnichannelqueue_MailboxTrackingFolders: WebExpand<msdyn_omnichannelqueue_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_omnichannelqueue_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_omnichannelqueue_PrincipalObjectAttributeAccesses: WebExpand<msdyn_omnichannelqueue_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_omnichannelqueue_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_omnichannelqueue_ProcessSession: WebExpand<msdyn_omnichannelqueue_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_omnichannelqueue_ProcessSession: ProcessSession_Result[] }>;
  msdyn_omnichannelqueue_SyncErrors: WebExpand<msdyn_omnichannelqueue_Expand, SyncError_Select, SyncError_Filter, { msdyn_omnichannelqueue_SyncErrors: SyncError_Result[] }>;
  msdyn_omnichannelqueue_UserEntityInstanceDatas: WebExpand<msdyn_omnichannelqueue_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_omnichannelqueue_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_omnichannelqueue_ocruleitem: WebExpand<msdyn_omnichannelqueue_Expand, msdyn_ocruleitem_Select, msdyn_ocruleitem_Filter, { msdyn_omnichannelqueue_ocruleitem: msdyn_ocruleitem_Result[] }>;
  msdyn_systemuser_msdyn_omnichannelqueue: WebExpand<msdyn_omnichannelqueue_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_systemuser_msdyn_omnichannelqueue: SystemUser_Result[] }>;
  ownerid: WebExpand<msdyn_omnichannelqueue_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_omnichannelqueue_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_omnichannelqueue_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_omnichannelqueue_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_omnichannelqueue_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_omnichannelqueue_Result extends msdyn_omnichannelqueue_Base, msdyn_omnichannelqueue_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_omnichannelqueue_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_omnichannelqueue_RelatedMany {
  msdyn_msdyn_omnichannelqueue_msdyn_liveconversation: WebMappingRetrieve<msdyn_liveconversation_Select,msdyn_liveconversation_Expand,msdyn_liveconversation_Filter,msdyn_liveconversation_Fixed,msdyn_liveconversation_Result,msdyn_liveconversation_FormattedResult>;
  msdyn_msdyn_omnichannelqueue_msdyn_ocliveworkitem_queueid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_msdyn_omnichannelqueue_msdyn_ocsession_queueid: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  msdyn_omnichannelqueue_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_omnichannelqueue_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_omnichannelqueue_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_omnichannelqueue_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_omnichannelqueue_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_omnichannelqueue_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_omnichannelqueue_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_omnichannelqueue_ocruleitem: WebMappingRetrieve<msdyn_ocruleitem_Select,msdyn_ocruleitem_Expand,msdyn_ocruleitem_Filter,msdyn_ocruleitem_Fixed,msdyn_ocruleitem_Result,msdyn_ocruleitem_FormattedResult>;
  msdyn_systemuser_msdyn_omnichannelqueue: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_omnichannelqueues: WebMappingRetrieve<msdyn_omnichannelqueue_Select,msdyn_omnichannelqueue_Expand,msdyn_omnichannelqueue_Filter,msdyn_omnichannelqueue_Fixed,msdyn_omnichannelqueue_Result,msdyn_omnichannelqueue_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_omnichannelqueues: WebMappingRelated<msdyn_omnichannelqueue_RelatedOne,msdyn_omnichannelqueue_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_omnichannelqueues: WebMappingCUDA<msdyn_omnichannelqueue_Create,msdyn_omnichannelqueue_Update,msdyn_omnichannelqueue_Select>;
}
