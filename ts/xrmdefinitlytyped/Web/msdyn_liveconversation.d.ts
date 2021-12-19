interface msdyn_liveconversation_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_activeagentassignedon?: Date | null;
  msdyn_channel?: msdyn_streamsource | null;
  msdyn_closedon?: Date | null;
  msdyn_createdon?: Date | null;
  msdyn_customersentimentlabel?: msdyn_liveconversation_msdyn_customersentimentlabel | null;
  msdyn_escalationcount?: number | null;
  msdyn_initiatedon?: Date | null;
  msdyn_liveconversationid?: string | null;
  msdyn_modifiedon?: Date | null;
  msdyn_oclastsessionid?: string | null;
  msdyn_startedon?: Date | null;
  msdyn_statecode?: msdyn_conversation_statecode | null;
  msdyn_statuscode?: msdyn_conversation_statuscode | null;
  msdyn_statusupdatedon?: Date | null;
  msdyn_subject?: string | null;
  msdyn_title?: string | null;
  msdyn_transfercount?: number | null;
  msdyn_workstreamworkdistributionmode?: msdyn_workdistributionmode | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_liveconversation_statecode | null;
  statuscode?: msdyn_liveconversation_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_liveconversation_Relationships {
  msdyn_customer_msdyn_liveconversation_account?: Account_Result | null;
  msdyn_customer_msdyn_liveconversation_contact?: Contact_Result | null;
  msdyn_liveconversation_Annotations?: Annotation_Result[] | null;
  msdyn_liveconversation_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_liveconversation_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_liveconversation_Feedback?: Feedback_Result[] | null;
  msdyn_liveconversation_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_liveconversation_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_liveconversation_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_liveconversation_QueueItems?: QueueItem_Result[] | null;
  msdyn_liveconversation_SyncErrors?: SyncError_Result[] | null;
  msdyn_liveconversation_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_liveconversation_connections1?: Connection_Result[] | null;
  msdyn_liveconversation_connections2?: Connection_Result[] | null;
}
interface msdyn_liveconversation extends msdyn_liveconversation_Base, msdyn_liveconversation_Relationships {
  msdyn_activeagentid_bind$systemusers?: string | null;
  msdyn_cdsqueueid_bind$queues?: string | null;
  msdyn_customer_msdyn_liveconversation_account_bind$accounts?: string | null;
  msdyn_customer_msdyn_liveconversation_contact_bind$contacts?: string | null;
  msdyn_liveworkstreamid_bind$msdyn_liveworkstreams?: string | null;
  msdyn_queueid_bind$msdyn_omnichannelqueues?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_liveconversation_Create extends msdyn_liveconversation {
}
interface msdyn_liveconversation_Update extends msdyn_liveconversation {
}
interface msdyn_liveconversation_Select {
  createdby_guid: WebAttribute<msdyn_liveconversation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_liveconversation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_liveconversation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_liveconversation_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_liveconversation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_liveconversation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_liveconversation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_activeagentassignedon: WebAttribute<msdyn_liveconversation_Select, { msdyn_activeagentassignedon: Date | null }, { msdyn_activeagentassignedon_formatted?: string }>;
  msdyn_activeagentid_guid: WebAttribute<msdyn_liveconversation_Select, { msdyn_activeagentid_guid: string | null }, { msdyn_activeagentid_formatted?: string }>;
  msdyn_cdsqueueid_guid: WebAttribute<msdyn_liveconversation_Select, { msdyn_cdsqueueid_guid: string | null }, { msdyn_cdsqueueid_formatted?: string }>;
  msdyn_channel: WebAttribute<msdyn_liveconversation_Select, { msdyn_channel: msdyn_streamsource | null }, { msdyn_channel_formatted?: string }>;
  msdyn_closedon: WebAttribute<msdyn_liveconversation_Select, { msdyn_closedon: Date | null }, { msdyn_closedon_formatted?: string }>;
  msdyn_createdon: WebAttribute<msdyn_liveconversation_Select, { msdyn_createdon: Date | null }, { msdyn_createdon_formatted?: string }>;
  msdyn_customer_guid: WebAttribute<msdyn_liveconversation_Select, { msdyn_customer_guid: string | null }, { msdyn_customer_formatted?: string }>;
  msdyn_customersentimentlabel: WebAttribute<msdyn_liveconversation_Select, { msdyn_customersentimentlabel: msdyn_liveconversation_msdyn_customersentimentlabel | null }, { msdyn_customersentimentlabel_formatted?: string }>;
  msdyn_escalationcount: WebAttribute<msdyn_liveconversation_Select, { msdyn_escalationcount: number | null }, {  }>;
  msdyn_initiatedon: WebAttribute<msdyn_liveconversation_Select, { msdyn_initiatedon: Date | null }, { msdyn_initiatedon_formatted?: string }>;
  msdyn_liveconversationid: WebAttribute<msdyn_liveconversation_Select, { msdyn_liveconversationid: string | null }, {  }>;
  msdyn_liveworkstreamid_guid: WebAttribute<msdyn_liveconversation_Select, { msdyn_liveworkstreamid_guid: string | null }, { msdyn_liveworkstreamid_formatted?: string }>;
  msdyn_modifiedon: WebAttribute<msdyn_liveconversation_Select, { msdyn_modifiedon: Date | null }, { msdyn_modifiedon_formatted?: string }>;
  msdyn_oclastsessionid: WebAttribute<msdyn_liveconversation_Select, { msdyn_oclastsessionid: string | null }, {  }>;
  msdyn_queueid_guid: WebAttribute<msdyn_liveconversation_Select, { msdyn_queueid_guid: string | null }, { msdyn_queueid_formatted?: string }>;
  msdyn_startedon: WebAttribute<msdyn_liveconversation_Select, { msdyn_startedon: Date | null }, { msdyn_startedon_formatted?: string }>;
  msdyn_statecode: WebAttribute<msdyn_liveconversation_Select, { msdyn_statecode: msdyn_conversation_statecode | null }, { msdyn_statecode_formatted?: string }>;
  msdyn_statuscode: WebAttribute<msdyn_liveconversation_Select, { msdyn_statuscode: msdyn_conversation_statuscode | null }, { msdyn_statuscode_formatted?: string }>;
  msdyn_statusupdatedon: WebAttribute<msdyn_liveconversation_Select, { msdyn_statusupdatedon: Date | null }, { msdyn_statusupdatedon_formatted?: string }>;
  msdyn_subject: WebAttribute<msdyn_liveconversation_Select, { msdyn_subject: string | null }, {  }>;
  msdyn_title: WebAttribute<msdyn_liveconversation_Select, { msdyn_title: string | null }, {  }>;
  msdyn_transfercount: WebAttribute<msdyn_liveconversation_Select, { msdyn_transfercount: number | null }, {  }>;
  msdyn_workstreamworkdistributionmode: WebAttribute<msdyn_liveconversation_Select, { msdyn_workstreamworkdistributionmode: msdyn_workdistributionmode | null }, { msdyn_workstreamworkdistributionmode_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_liveconversation_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_liveconversation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_liveconversation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_liveconversation_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_liveconversation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_liveconversation_Select, { statecode: msdyn_liveconversation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_liveconversation_Select, { statuscode: msdyn_liveconversation_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_liveconversation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_liveconversation_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_liveconversation_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_liveconversation_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_activeagentassignedon: Date;
  msdyn_activeagentid_guid: XQW.Guid;
  msdyn_cdsqueueid_guid: XQW.Guid;
  msdyn_channel: msdyn_streamsource;
  msdyn_closedon: Date;
  msdyn_createdon: Date;
  msdyn_customer_guid: XQW.Guid;
  msdyn_customersentimentlabel: msdyn_liveconversation_msdyn_customersentimentlabel;
  msdyn_escalationcount: number;
  msdyn_initiatedon: Date;
  msdyn_liveconversationid: XQW.Guid;
  msdyn_liveworkstreamid_guid: XQW.Guid;
  msdyn_modifiedon: Date;
  msdyn_oclastsessionid: string;
  msdyn_queueid_guid: XQW.Guid;
  msdyn_startedon: Date;
  msdyn_statecode: msdyn_conversation_statecode;
  msdyn_statuscode: msdyn_conversation_statuscode;
  msdyn_statusupdatedon: Date;
  msdyn_subject: string;
  msdyn_title: string;
  msdyn_transfercount: number;
  msdyn_workstreamworkdistributionmode: msdyn_workdistributionmode;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_liveconversation_statecode;
  statuscode: msdyn_liveconversation_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_liveconversation_Expand {
  createdby: WebExpand<msdyn_liveconversation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_liveconversation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_liveconversation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_liveconversation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_activeagentid: WebExpand<msdyn_liveconversation_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_activeagentid: SystemUser_Result }>;
  msdyn_cdsqueueid: WebExpand<msdyn_liveconversation_Expand, Queue_Select, Queue_Filter, { msdyn_cdsqueueid: Queue_Result }>;
  msdyn_customer_msdyn_liveconversation_account: WebExpand<msdyn_liveconversation_Expand, Account_Select, Account_Filter, { msdyn_customer_msdyn_liveconversation_account: Account_Result }>;
  msdyn_customer_msdyn_liveconversation_contact: WebExpand<msdyn_liveconversation_Expand, Contact_Select, Contact_Filter, { msdyn_customer_msdyn_liveconversation_contact: Contact_Result }>;
  msdyn_liveconversation_Annotations: WebExpand<msdyn_liveconversation_Expand, Annotation_Select, Annotation_Filter, { msdyn_liveconversation_Annotations: Annotation_Result[] }>;
  msdyn_liveconversation_AsyncOperations: WebExpand<msdyn_liveconversation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_liveconversation_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_liveconversation_BulkDeleteFailures: WebExpand<msdyn_liveconversation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_liveconversation_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_liveconversation_Feedback: WebExpand<msdyn_liveconversation_Expand, Feedback_Select, Feedback_Filter, { msdyn_liveconversation_Feedback: Feedback_Result[] }>;
  msdyn_liveconversation_MailboxTrackingFolders: WebExpand<msdyn_liveconversation_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_liveconversation_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_liveconversation_PrincipalObjectAttributeAccesses: WebExpand<msdyn_liveconversation_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_liveconversation_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_liveconversation_ProcessSession: WebExpand<msdyn_liveconversation_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_liveconversation_ProcessSession: ProcessSession_Result[] }>;
  msdyn_liveconversation_QueueItems: WebExpand<msdyn_liveconversation_Expand, QueueItem_Select, QueueItem_Filter, { msdyn_liveconversation_QueueItems: QueueItem_Result[] }>;
  msdyn_liveconversation_SyncErrors: WebExpand<msdyn_liveconversation_Expand, SyncError_Select, SyncError_Filter, { msdyn_liveconversation_SyncErrors: SyncError_Result[] }>;
  msdyn_liveconversation_UserEntityInstanceDatas: WebExpand<msdyn_liveconversation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_liveconversation_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_liveconversation_connections1: WebExpand<msdyn_liveconversation_Expand, Connection_Select, Connection_Filter, { msdyn_liveconversation_connections1: Connection_Result[] }>;
  msdyn_liveconversation_connections2: WebExpand<msdyn_liveconversation_Expand, Connection_Select, Connection_Filter, { msdyn_liveconversation_connections2: Connection_Result[] }>;
  msdyn_liveworkstreamid: WebExpand<msdyn_liveconversation_Expand, msdyn_liveworkstream_Select, msdyn_liveworkstream_Filter, { msdyn_liveworkstreamid: msdyn_liveworkstream_Result }>;
  msdyn_queueid: WebExpand<msdyn_liveconversation_Expand, msdyn_omnichannelqueue_Select, msdyn_omnichannelqueue_Filter, { msdyn_queueid: msdyn_omnichannelqueue_Result }>;
  ownerid: WebExpand<msdyn_liveconversation_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_liveconversation_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_liveconversation_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_liveconversation_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_liveconversation_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_activeagentassignedon_formatted?: string;
  msdyn_activeagentid_formatted?: string;
  msdyn_cdsqueueid_formatted?: string;
  msdyn_channel_formatted?: string;
  msdyn_closedon_formatted?: string;
  msdyn_createdon_formatted?: string;
  msdyn_customer_formatted?: string;
  msdyn_customersentimentlabel_formatted?: string;
  msdyn_initiatedon_formatted?: string;
  msdyn_liveworkstreamid_formatted?: string;
  msdyn_modifiedon_formatted?: string;
  msdyn_queueid_formatted?: string;
  msdyn_startedon_formatted?: string;
  msdyn_statecode_formatted?: string;
  msdyn_statuscode_formatted?: string;
  msdyn_statusupdatedon_formatted?: string;
  msdyn_workstreamworkdistributionmode_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_liveconversation_Result extends msdyn_liveconversation_Base, msdyn_liveconversation_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_activeagentid_guid: string | null;
  msdyn_cdsqueueid_guid: string | null;
  msdyn_customer_guid: string | null;
  msdyn_liveworkstreamid_guid: string | null;
  msdyn_queueid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_liveconversation_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_activeagentid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_cdsqueueid: WebMappingRetrieve<Queue_Select,Queue_Expand,Queue_Filter,Queue_Fixed,Queue_Result,Queue_FormattedResult>;
  msdyn_customer_msdyn_liveconversation_account: WebMappingRetrieve<Account_Select,Account_Expand,Account_Filter,Account_Fixed,Account_Result,Account_FormattedResult>;
  msdyn_customer_msdyn_liveconversation_contact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  msdyn_liveworkstreamid: WebMappingRetrieve<msdyn_liveworkstream_Select,msdyn_liveworkstream_Expand,msdyn_liveworkstream_Filter,msdyn_liveworkstream_Fixed,msdyn_liveworkstream_Result,msdyn_liveworkstream_FormattedResult>;
  msdyn_queueid: WebMappingRetrieve<msdyn_omnichannelqueue_Select,msdyn_omnichannelqueue_Expand,msdyn_omnichannelqueue_Filter,msdyn_omnichannelqueue_Fixed,msdyn_omnichannelqueue_Result,msdyn_omnichannelqueue_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_liveconversation_RelatedMany {
  msdyn_liveconversation_Annotations: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
  msdyn_liveconversation_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_liveconversation_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_liveconversation_Feedback: WebMappingRetrieve<Feedback_Select,Feedback_Expand,Feedback_Filter,Feedback_Fixed,Feedback_Result,Feedback_FormattedResult>;
  msdyn_liveconversation_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_liveconversation_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_liveconversation_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_liveconversation_QueueItems: WebMappingRetrieve<QueueItem_Select,QueueItem_Expand,QueueItem_Filter,QueueItem_Fixed,QueueItem_Result,QueueItem_FormattedResult>;
  msdyn_liveconversation_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_liveconversation_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_liveconversation_connections1: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
  msdyn_liveconversation_connections2: WebMappingRetrieve<Connection_Select,Connection_Expand,Connection_Filter,Connection_Fixed,Connection_Result,Connection_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_liveconversations: WebMappingRetrieve<msdyn_liveconversation_Select,msdyn_liveconversation_Expand,msdyn_liveconversation_Filter,msdyn_liveconversation_Fixed,msdyn_liveconversation_Result,msdyn_liveconversation_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_liveconversations: WebMappingRelated<msdyn_liveconversation_RelatedOne,msdyn_liveconversation_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_liveconversations: WebMappingCUDA<msdyn_liveconversation_Create,msdyn_liveconversation_Update,msdyn_liveconversation_Select>;
}
