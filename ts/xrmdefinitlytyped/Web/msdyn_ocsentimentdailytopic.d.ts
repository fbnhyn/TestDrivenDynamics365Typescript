interface msdyn_ocsentimentdailytopic_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_conversationcount?: number | null;
  msdyn_conversationexample?: string | null;
  msdyn_name?: string | null;
  msdyn_ocsentimentdailytopicid?: string | null;
  msdyn_sentimentdriverintradayweightimpact?: number | null;
  msdyn_sentimentscore?: number | null;
  msdyn_topiccountpercentage?: number | null;
  msdyn_topicdate?: Date | null;
  msdyn_topicindex?: number | null;
  msdyn_topicname?: string | null;
  msdyn_weeklyid?: string | null;
  msdyn_weeklytopicid?: string | null;
  msdyn_weeklytopicname?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_ocsentimentdailytopic_statecode | null;
  statuscode?: msdyn_ocsentimentdailytopic_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_ocsentimentdailytopic_Relationships {
  msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid?: msdyn_ocliveworkitem_Result[] | null;
  msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid?: msdyn_ocsentimentdailytopickeyword_Result[] | null;
  msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid?: msdyn_ocsentimentdailytopictrending_Result[] | null;
  msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid?: msdyn_ocsentimentdailytopictrending_Result[] | null;
  msdyn_ocsentimentdailytopic_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_ocsentimentdailytopic_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_ocsentimentdailytopic_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsentimentdailytopic_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_ocsentimentdailytopic_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ocsentimentdailytopic_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_ocsentimentdailytopic_SyncErrors?: SyncError_Result[] | null;
  msdyn_ocsentimentdailytopic_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_ocsentimentdailytopic extends msdyn_ocsentimentdailytopic_Base, msdyn_ocsentimentdailytopic_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_ocsentimentdailytopic_Create extends msdyn_ocsentimentdailytopic {
}
interface msdyn_ocsentimentdailytopic_Update extends msdyn_ocsentimentdailytopic {
}
interface msdyn_ocsentimentdailytopic_Select {
  createdby_guid: WebAttribute<msdyn_ocsentimentdailytopic_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_ocsentimentdailytopic_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_ocsentimentdailytopic_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_ocsentimentdailytopic_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_ocsentimentdailytopic_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_ocsentimentdailytopic_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_ocsentimentdailytopic_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_conversationcount: WebAttribute<msdyn_ocsentimentdailytopic_Select, { msdyn_conversationcount: number | null }, {  }>;
  msdyn_conversationexample: WebAttribute<msdyn_ocsentimentdailytopic_Select, { msdyn_conversationexample: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_ocsentimentdailytopic_Select, { msdyn_name: string | null }, {  }>;
  msdyn_ocsentimentdailytopicid: WebAttribute<msdyn_ocsentimentdailytopic_Select, { msdyn_ocsentimentdailytopicid: string | null }, {  }>;
  msdyn_sentimentdriverintradayweightimpact: WebAttribute<msdyn_ocsentimentdailytopic_Select, { msdyn_sentimentdriverintradayweightimpact: number | null }, {  }>;
  msdyn_sentimentscore: WebAttribute<msdyn_ocsentimentdailytopic_Select, { msdyn_sentimentscore: number | null }, {  }>;
  msdyn_topiccountpercentage: WebAttribute<msdyn_ocsentimentdailytopic_Select, { msdyn_topiccountpercentage: number | null }, {  }>;
  msdyn_topicdate: WebAttribute<msdyn_ocsentimentdailytopic_Select, { msdyn_topicdate: Date | null }, { msdyn_topicdate_formatted?: string }>;
  msdyn_topicindex: WebAttribute<msdyn_ocsentimentdailytopic_Select, { msdyn_topicindex: number | null }, {  }>;
  msdyn_topicname: WebAttribute<msdyn_ocsentimentdailytopic_Select, { msdyn_topicname: string | null }, {  }>;
  msdyn_weeklyid: WebAttribute<msdyn_ocsentimentdailytopic_Select, { msdyn_weeklyid: string | null }, {  }>;
  msdyn_weeklytopicid: WebAttribute<msdyn_ocsentimentdailytopic_Select, { msdyn_weeklytopicid: string | null }, {  }>;
  msdyn_weeklytopicname: WebAttribute<msdyn_ocsentimentdailytopic_Select, { msdyn_weeklytopicname: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_ocsentimentdailytopic_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_ocsentimentdailytopic_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_ocsentimentdailytopic_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_ocsentimentdailytopic_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_ocsentimentdailytopic_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_ocsentimentdailytopic_Select, { statecode: msdyn_ocsentimentdailytopic_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_ocsentimentdailytopic_Select, { statuscode: msdyn_ocsentimentdailytopic_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_ocsentimentdailytopic_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_ocsentimentdailytopic_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_ocsentimentdailytopic_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_ocsentimentdailytopic_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_conversationcount: number;
  msdyn_conversationexample: string;
  msdyn_name: string;
  msdyn_ocsentimentdailytopicid: XQW.Guid;
  msdyn_sentimentdriverintradayweightimpact: number;
  msdyn_sentimentscore: number;
  msdyn_topiccountpercentage: number;
  msdyn_topicdate: Date;
  msdyn_topicindex: number;
  msdyn_topicname: string;
  msdyn_weeklyid: string;
  msdyn_weeklytopicid: string;
  msdyn_weeklytopicname: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_ocsentimentdailytopic_statecode;
  statuscode: msdyn_ocsentimentdailytopic_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_ocsentimentdailytopic_Expand {
  createdby: WebExpand<msdyn_ocsentimentdailytopic_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_ocsentimentdailytopic_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_ocsentimentdailytopic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_ocsentimentdailytopic_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid: WebExpand<msdyn_ocsentimentdailytopic_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid: msdyn_ocliveworkitem_Result[] }>;
  msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid: WebExpand<msdyn_ocsentimentdailytopic_Expand, msdyn_ocsentimentdailytopickeyword_Select, msdyn_ocsentimentdailytopickeyword_Filter, { msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid: msdyn_ocsentimentdailytopickeyword_Result[] }>;
  msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid: WebExpand<msdyn_ocsentimentdailytopic_Expand, msdyn_ocsentimentdailytopictrending_Select, msdyn_ocsentimentdailytopictrending_Filter, { msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid: msdyn_ocsentimentdailytopictrending_Result[] }>;
  msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid: WebExpand<msdyn_ocsentimentdailytopic_Expand, msdyn_ocsentimentdailytopictrending_Select, msdyn_ocsentimentdailytopictrending_Filter, { msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid: msdyn_ocsentimentdailytopictrending_Result[] }>;
  msdyn_ocsentimentdailytopic_AsyncOperations: WebExpand<msdyn_ocsentimentdailytopic_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_ocsentimentdailytopic_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_ocsentimentdailytopic_BulkDeleteFailures: WebExpand<msdyn_ocsentimentdailytopic_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_ocsentimentdailytopic_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_ocsentimentdailytopic_DuplicateBaseRecord: WebExpand<msdyn_ocsentimentdailytopic_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsentimentdailytopic_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsentimentdailytopic_DuplicateMatchingRecord: WebExpand<msdyn_ocsentimentdailytopic_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_ocsentimentdailytopic_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_ocsentimentdailytopic_MailboxTrackingFolders: WebExpand<msdyn_ocsentimentdailytopic_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_ocsentimentdailytopic_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses: WebExpand<msdyn_ocsentimentdailytopic_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_ocsentimentdailytopic_ProcessSession: WebExpand<msdyn_ocsentimentdailytopic_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_ocsentimentdailytopic_ProcessSession: ProcessSession_Result[] }>;
  msdyn_ocsentimentdailytopic_SyncErrors: WebExpand<msdyn_ocsentimentdailytopic_Expand, SyncError_Select, SyncError_Filter, { msdyn_ocsentimentdailytopic_SyncErrors: SyncError_Result[] }>;
  msdyn_ocsentimentdailytopic_UserEntityInstanceDatas: WebExpand<msdyn_ocsentimentdailytopic_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_ocsentimentdailytopic_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_ocsentimentdailytopic_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_ocsentimentdailytopic_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_ocsentimentdailytopic_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_ocsentimentdailytopic_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_ocsentimentdailytopic_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_topicdate_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_ocsentimentdailytopic_Result extends msdyn_ocsentimentdailytopic_Base, msdyn_ocsentimentdailytopic_Relationships {
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
interface msdyn_ocsentimentdailytopic_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_ocsentimentdailytopic_RelatedMany {
  msdyn_msdyn_ocsentimentdailytopic_msdyn_ocliveworkitem_dailytopicid: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopickeyword_dailytopicid: WebMappingRetrieve<msdyn_ocsentimentdailytopickeyword_Select,msdyn_ocsentimentdailytopickeyword_Expand,msdyn_ocsentimentdailytopickeyword_Filter,msdyn_ocsentimentdailytopickeyword_Fixed,msdyn_ocsentimentdailytopickeyword_Result,msdyn_ocsentimentdailytopickeyword_FormattedResult>;
  msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_basetopicid: WebMappingRetrieve<msdyn_ocsentimentdailytopictrending_Select,msdyn_ocsentimentdailytopictrending_Expand,msdyn_ocsentimentdailytopictrending_Filter,msdyn_ocsentimentdailytopictrending_Fixed,msdyn_ocsentimentdailytopictrending_Result,msdyn_ocsentimentdailytopictrending_FormattedResult>;
  msdyn_msdyn_ocsentimentdailytopic_msdyn_ocsentimentdailytopictrending_dailytopicid: WebMappingRetrieve<msdyn_ocsentimentdailytopictrending_Select,msdyn_ocsentimentdailytopictrending_Expand,msdyn_ocsentimentdailytopictrending_Filter,msdyn_ocsentimentdailytopictrending_Fixed,msdyn_ocsentimentdailytopictrending_Result,msdyn_ocsentimentdailytopictrending_FormattedResult>;
  msdyn_ocsentimentdailytopic_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_ocsentimentdailytopic_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_ocsentimentdailytopic_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsentimentdailytopic_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_ocsentimentdailytopic_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_ocsentimentdailytopic_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_ocsentimentdailytopic_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_ocsentimentdailytopic_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_ocsentimentdailytopic_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_ocsentimentdailytopics: WebMappingRetrieve<msdyn_ocsentimentdailytopic_Select,msdyn_ocsentimentdailytopic_Expand,msdyn_ocsentimentdailytopic_Filter,msdyn_ocsentimentdailytopic_Fixed,msdyn_ocsentimentdailytopic_Result,msdyn_ocsentimentdailytopic_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_ocsentimentdailytopics: WebMappingRelated<msdyn_ocsentimentdailytopic_RelatedOne,msdyn_ocsentimentdailytopic_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_ocsentimentdailytopics: WebMappingCUDA<msdyn_ocsentimentdailytopic_Create,msdyn_ocsentimentdailytopic_Update,msdyn_ocsentimentdailytopic_Select>;
}
