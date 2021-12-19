interface msdyn_sessionparticipant_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_activedirectoryuserid?: string | null;
  msdyn_activetime?: number | null;
  msdyn_addedon?: Date | null;
  msdyn_externalparticipantchannel?: string | null;
  msdyn_externalparticipantchanneltype?: msdyn_externalparticipantchanneltype | null;
  msdyn_idletime?: number | null;
  msdyn_inactivetime?: number | null;
  msdyn_joinedon?: Date | null;
  msdyn_lefton?: Date | null;
  msdyn_mode?: msdyn_sessionparticipant_msdyn_mode | null;
  msdyn_modifiedon?: Date | null;
  msdyn_name?: string | null;
  msdyn_sessionparticipantid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_sessionparticipant_statecode | null;
  statuscode?: msdyn_sessionparticipant_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_sessionparticipant_Relationships {
  msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid?: msdyn_ocsessionparticipantevent_Result[] | null;
  msdyn_sessionparticipant_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_sessionparticipant_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_sessionparticipant_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_sessionparticipant_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_sessionparticipant_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_sessionparticipant_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_sessionparticipant_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_sessionparticipant_SyncErrors?: SyncError_Result[] | null;
  msdyn_sessionparticipant_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_sessionparticipant extends msdyn_sessionparticipant_Base, msdyn_sessionparticipant_Relationships {
  msdyn_agentid_bind$systemusers?: string | null;
  msdyn_omnichannelsession_bind$msdyn_ocsessions?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_sessionparticipant_Create extends msdyn_sessionparticipant {
}
interface msdyn_sessionparticipant_Update extends msdyn_sessionparticipant {
}
interface msdyn_sessionparticipant_Select {
  createdby_guid: WebAttribute<msdyn_sessionparticipant_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_sessionparticipant_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_sessionparticipant_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_sessionparticipant_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_sessionparticipant_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_sessionparticipant_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_sessionparticipant_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_activedirectoryuserid: WebAttribute<msdyn_sessionparticipant_Select, { msdyn_activedirectoryuserid: string | null }, {  }>;
  msdyn_activetime: WebAttribute<msdyn_sessionparticipant_Select, { msdyn_activetime: number | null }, {  }>;
  msdyn_addedon: WebAttribute<msdyn_sessionparticipant_Select, { msdyn_addedon: Date | null }, { msdyn_addedon_formatted?: string }>;
  msdyn_agentid_guid: WebAttribute<msdyn_sessionparticipant_Select, { msdyn_agentid_guid: string | null }, { msdyn_agentid_formatted?: string }>;
  msdyn_externalparticipantchannel: WebAttribute<msdyn_sessionparticipant_Select, { msdyn_externalparticipantchannel: string | null }, {  }>;
  msdyn_externalparticipantchanneltype: WebAttribute<msdyn_sessionparticipant_Select, { msdyn_externalparticipantchanneltype: msdyn_externalparticipantchanneltype | null }, { msdyn_externalparticipantchanneltype_formatted?: string }>;
  msdyn_idletime: WebAttribute<msdyn_sessionparticipant_Select, { msdyn_idletime: number | null }, {  }>;
  msdyn_inactivetime: WebAttribute<msdyn_sessionparticipant_Select, { msdyn_inactivetime: number | null }, {  }>;
  msdyn_joinedon: WebAttribute<msdyn_sessionparticipant_Select, { msdyn_joinedon: Date | null }, { msdyn_joinedon_formatted?: string }>;
  msdyn_lefton: WebAttribute<msdyn_sessionparticipant_Select, { msdyn_lefton: Date | null }, { msdyn_lefton_formatted?: string }>;
  msdyn_mode: WebAttribute<msdyn_sessionparticipant_Select, { msdyn_mode: msdyn_sessionparticipant_msdyn_mode | null }, { msdyn_mode_formatted?: string }>;
  msdyn_modifiedon: WebAttribute<msdyn_sessionparticipant_Select, { msdyn_modifiedon: Date | null }, { msdyn_modifiedon_formatted?: string }>;
  msdyn_name: WebAttribute<msdyn_sessionparticipant_Select, { msdyn_name: string | null }, {  }>;
  msdyn_omnichannelsession_guid: WebAttribute<msdyn_sessionparticipant_Select, { msdyn_omnichannelsession_guid: string | null }, { msdyn_omnichannelsession_formatted?: string }>;
  msdyn_sessionparticipantid: WebAttribute<msdyn_sessionparticipant_Select, { msdyn_sessionparticipantid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_sessionparticipant_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_sessionparticipant_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_sessionparticipant_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_sessionparticipant_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_sessionparticipant_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_sessionparticipant_Select, { statecode: msdyn_sessionparticipant_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_sessionparticipant_Select, { statuscode: msdyn_sessionparticipant_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_sessionparticipant_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_sessionparticipant_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_sessionparticipant_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_sessionparticipant_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_activedirectoryuserid: string;
  msdyn_activetime: number;
  msdyn_addedon: Date;
  msdyn_agentid_guid: XQW.Guid;
  msdyn_externalparticipantchannel: string;
  msdyn_externalparticipantchanneltype: msdyn_externalparticipantchanneltype;
  msdyn_idletime: number;
  msdyn_inactivetime: number;
  msdyn_joinedon: Date;
  msdyn_lefton: Date;
  msdyn_mode: msdyn_sessionparticipant_msdyn_mode;
  msdyn_modifiedon: Date;
  msdyn_name: string;
  msdyn_omnichannelsession_guid: XQW.Guid;
  msdyn_sessionparticipantid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_sessionparticipant_statecode;
  statuscode: msdyn_sessionparticipant_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_sessionparticipant_Expand {
  createdby: WebExpand<msdyn_sessionparticipant_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_sessionparticipant_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_sessionparticipant_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_sessionparticipant_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_agentid: WebExpand<msdyn_sessionparticipant_Expand, SystemUser_Select, SystemUser_Filter, { msdyn_agentid: SystemUser_Result }>;
  msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid: WebExpand<msdyn_sessionparticipant_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid: msdyn_ocliveworkitem_Result[] }>;
  msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid: WebExpand<msdyn_sessionparticipant_Expand, msdyn_ocsessionparticipantevent_Select, msdyn_ocsessionparticipantevent_Filter, { msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid: msdyn_ocsessionparticipantevent_Result[] }>;
  msdyn_omnichannelsession: WebExpand<msdyn_sessionparticipant_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { msdyn_omnichannelsession: msdyn_ocsession_Result }>;
  msdyn_sessionparticipant_AsyncOperations: WebExpand<msdyn_sessionparticipant_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_sessionparticipant_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_sessionparticipant_BulkDeleteFailures: WebExpand<msdyn_sessionparticipant_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_sessionparticipant_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_sessionparticipant_DuplicateBaseRecord: WebExpand<msdyn_sessionparticipant_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sessionparticipant_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_sessionparticipant_DuplicateMatchingRecord: WebExpand<msdyn_sessionparticipant_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_sessionparticipant_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_sessionparticipant_MailboxTrackingFolders: WebExpand<msdyn_sessionparticipant_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_sessionparticipant_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_sessionparticipant_PrincipalObjectAttributeAccesses: WebExpand<msdyn_sessionparticipant_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_sessionparticipant_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_sessionparticipant_ProcessSession: WebExpand<msdyn_sessionparticipant_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_sessionparticipant_ProcessSession: ProcessSession_Result[] }>;
  msdyn_sessionparticipant_SyncErrors: WebExpand<msdyn_sessionparticipant_Expand, SyncError_Select, SyncError_Filter, { msdyn_sessionparticipant_SyncErrors: SyncError_Result[] }>;
  msdyn_sessionparticipant_UserEntityInstanceDatas: WebExpand<msdyn_sessionparticipant_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_sessionparticipant_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_sessionparticipant_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_sessionparticipant_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_sessionparticipant_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_sessionparticipant_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_sessionparticipant_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_addedon_formatted?: string;
  msdyn_agentid_formatted?: string;
  msdyn_externalparticipantchanneltype_formatted?: string;
  msdyn_joinedon_formatted?: string;
  msdyn_lefton_formatted?: string;
  msdyn_mode_formatted?: string;
  msdyn_modifiedon_formatted?: string;
  msdyn_omnichannelsession_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_sessionparticipant_Result extends msdyn_sessionparticipant_Base, msdyn_sessionparticipant_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_agentid_guid: string | null;
  msdyn_omnichannelsession_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_sessionparticipant_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_agentid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_omnichannelsession: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_sessionparticipant_RelatedMany {
  msdyn_msdyn_sessionparticipant_msdyn_ocliveworkitem_activesessionparticipantid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_msdyn_sessionparticipant_msdyn_ocsessionparticipantevent_sessionparticipantid: WebMappingRetrieve<msdyn_ocsessionparticipantevent_Select,msdyn_ocsessionparticipantevent_Expand,msdyn_ocsessionparticipantevent_Filter,msdyn_ocsessionparticipantevent_Fixed,msdyn_ocsessionparticipantevent_Result,msdyn_ocsessionparticipantevent_FormattedResult>;
  msdyn_sessionparticipant_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_sessionparticipant_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_sessionparticipant_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sessionparticipant_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_sessionparticipant_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_sessionparticipant_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_sessionparticipant_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_sessionparticipant_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_sessionparticipant_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_sessionparticipants: WebMappingRetrieve<msdyn_sessionparticipant_Select,msdyn_sessionparticipant_Expand,msdyn_sessionparticipant_Filter,msdyn_sessionparticipant_Fixed,msdyn_sessionparticipant_Result,msdyn_sessionparticipant_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_sessionparticipants: WebMappingRelated<msdyn_sessionparticipant_RelatedOne,msdyn_sessionparticipant_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_sessionparticipants: WebMappingCUDA<msdyn_sessionparticipant_Create,msdyn_sessionparticipant_Update,msdyn_sessionparticipant_Select>;
}
