interface msdyn_conversationdata_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_accountid?: string | null;
  msdyn_additionaldata?: string | null;
  msdyn_channel?: string | null;
  msdyn_contactid?: string | null;
  msdyn_conversationdataid?: string | null;
  msdyn_conversationid?: string | null;
  msdyn_conversationtimestamp?: Date | null;
  msdyn_customattribute1?: string | null;
  msdyn_customattribute2?: string | null;
  msdyn_customattribute3?: string | null;
  msdyn_customattribute4?: string | null;
  msdyn_customattribute5?: string | null;
  msdyn_customercity?: string | null;
  msdyn_customercountry?: string | null;
  msdyn_customerstate?: string | null;
  msdyn_customerzip?: string | null;
  msdyn_externalcorrelationid?: string | null;
  msdyn_name?: string | null;
  msdyn_primaryrelatedentityname?: string | null;
  msdyn_primaryrelatedentityrecordid?: string | null;
  msdyn_providerid?: string | null;
  msdyn_providername?: string | null;
  msdyn_region?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_conversationdata_statecode | null;
  statuscode?: msdyn_conversationdata_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_conversationdata_Relationships {
  msdyn_conversationdata_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_conversationdata_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_conversationdata_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_conversationdata_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_conversationdata_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_conversationdata_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_conversationdata_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_conversationdata_SyncErrors?: SyncError_Result[] | null;
  msdyn_conversationdata_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_conversationdata extends msdyn_conversationdata_Base, msdyn_conversationdata_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_conversationdata_Create extends msdyn_conversationdata {
}
interface msdyn_conversationdata_Update extends msdyn_conversationdata {
}
interface msdyn_conversationdata_Select {
  createdby_guid: WebAttribute<msdyn_conversationdata_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_conversationdata_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_conversationdata_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_conversationdata_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_conversationdata_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_conversationdata_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_conversationdata_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_accountid: WebAttribute<msdyn_conversationdata_Select, { msdyn_accountid: string | null }, {  }>;
  msdyn_additionaldata: WebAttribute<msdyn_conversationdata_Select, { msdyn_additionaldata: string | null }, {  }>;
  msdyn_channel: WebAttribute<msdyn_conversationdata_Select, { msdyn_channel: string | null }, {  }>;
  msdyn_contactid: WebAttribute<msdyn_conversationdata_Select, { msdyn_contactid: string | null }, {  }>;
  msdyn_conversationdataid: WebAttribute<msdyn_conversationdata_Select, { msdyn_conversationdataid: string | null }, {  }>;
  msdyn_conversationid: WebAttribute<msdyn_conversationdata_Select, { msdyn_conversationid: string | null }, {  }>;
  msdyn_conversationtimestamp: WebAttribute<msdyn_conversationdata_Select, { msdyn_conversationtimestamp: Date | null }, { msdyn_conversationtimestamp_formatted?: string }>;
  msdyn_customattribute1: WebAttribute<msdyn_conversationdata_Select, { msdyn_customattribute1: string | null }, {  }>;
  msdyn_customattribute2: WebAttribute<msdyn_conversationdata_Select, { msdyn_customattribute2: string | null }, {  }>;
  msdyn_customattribute3: WebAttribute<msdyn_conversationdata_Select, { msdyn_customattribute3: string | null }, {  }>;
  msdyn_customattribute4: WebAttribute<msdyn_conversationdata_Select, { msdyn_customattribute4: string | null }, {  }>;
  msdyn_customattribute5: WebAttribute<msdyn_conversationdata_Select, { msdyn_customattribute5: string | null }, {  }>;
  msdyn_customercity: WebAttribute<msdyn_conversationdata_Select, { msdyn_customercity: string | null }, {  }>;
  msdyn_customercountry: WebAttribute<msdyn_conversationdata_Select, { msdyn_customercountry: string | null }, {  }>;
  msdyn_customerstate: WebAttribute<msdyn_conversationdata_Select, { msdyn_customerstate: string | null }, {  }>;
  msdyn_customerzip: WebAttribute<msdyn_conversationdata_Select, { msdyn_customerzip: string | null }, {  }>;
  msdyn_externalcorrelationid: WebAttribute<msdyn_conversationdata_Select, { msdyn_externalcorrelationid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_conversationdata_Select, { msdyn_name: string | null }, {  }>;
  msdyn_primaryrelatedentityname: WebAttribute<msdyn_conversationdata_Select, { msdyn_primaryrelatedentityname: string | null }, {  }>;
  msdyn_primaryrelatedentityrecordid: WebAttribute<msdyn_conversationdata_Select, { msdyn_primaryrelatedentityrecordid: string | null }, {  }>;
  msdyn_providerid: WebAttribute<msdyn_conversationdata_Select, { msdyn_providerid: string | null }, {  }>;
  msdyn_providername: WebAttribute<msdyn_conversationdata_Select, { msdyn_providername: string | null }, {  }>;
  msdyn_region: WebAttribute<msdyn_conversationdata_Select, { msdyn_region: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_conversationdata_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_conversationdata_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_conversationdata_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_conversationdata_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_conversationdata_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_conversationdata_Select, { statecode: msdyn_conversationdata_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_conversationdata_Select, { statuscode: msdyn_conversationdata_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_conversationdata_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_conversationdata_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_conversationdata_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_conversationdata_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_accountid: string;
  msdyn_additionaldata: string;
  msdyn_channel: string;
  msdyn_contactid: string;
  msdyn_conversationdataid: XQW.Guid;
  msdyn_conversationid: string;
  msdyn_conversationtimestamp: Date;
  msdyn_customattribute1: string;
  msdyn_customattribute2: string;
  msdyn_customattribute3: string;
  msdyn_customattribute4: string;
  msdyn_customattribute5: string;
  msdyn_customercity: string;
  msdyn_customercountry: string;
  msdyn_customerstate: string;
  msdyn_customerzip: string;
  msdyn_externalcorrelationid: string;
  msdyn_name: string;
  msdyn_primaryrelatedentityname: string;
  msdyn_primaryrelatedentityrecordid: string;
  msdyn_providerid: string;
  msdyn_providername: string;
  msdyn_region: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_conversationdata_statecode;
  statuscode: msdyn_conversationdata_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_conversationdata_Expand {
  createdby: WebExpand<msdyn_conversationdata_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_conversationdata_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_conversationdata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_conversationdata_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_conversationdata_AsyncOperations: WebExpand<msdyn_conversationdata_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_conversationdata_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_conversationdata_BulkDeleteFailures: WebExpand<msdyn_conversationdata_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_conversationdata_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_conversationdata_DuplicateBaseRecord: WebExpand<msdyn_conversationdata_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_conversationdata_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_conversationdata_DuplicateMatchingRecord: WebExpand<msdyn_conversationdata_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_conversationdata_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_conversationdata_MailboxTrackingFolders: WebExpand<msdyn_conversationdata_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_conversationdata_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_conversationdata_PrincipalObjectAttributeAccesses: WebExpand<msdyn_conversationdata_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_conversationdata_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_conversationdata_ProcessSession: WebExpand<msdyn_conversationdata_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_conversationdata_ProcessSession: ProcessSession_Result[] }>;
  msdyn_conversationdata_SyncErrors: WebExpand<msdyn_conversationdata_Expand, SyncError_Select, SyncError_Filter, { msdyn_conversationdata_SyncErrors: SyncError_Result[] }>;
  msdyn_conversationdata_UserEntityInstanceDatas: WebExpand<msdyn_conversationdata_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_conversationdata_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_conversationdata_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_conversationdata_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_conversationdata_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_conversationdata_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_conversationdata_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_conversationtimestamp_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_conversationdata_Result extends msdyn_conversationdata_Base, msdyn_conversationdata_Relationships {
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
interface msdyn_conversationdata_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_conversationdata_RelatedMany {
  msdyn_conversationdata_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_conversationdata_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_conversationdata_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_conversationdata_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_conversationdata_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_conversationdata_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_conversationdata_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_conversationdata_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_conversationdata_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_conversationsdata: WebMappingRetrieve<msdyn_conversationdata_Select,msdyn_conversationdata_Expand,msdyn_conversationdata_Filter,msdyn_conversationdata_Fixed,msdyn_conversationdata_Result,msdyn_conversationdata_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_conversationsdata: WebMappingRelated<msdyn_conversationdata_RelatedOne,msdyn_conversationdata_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_conversationsdata: WebMappingCUDA<msdyn_conversationdata_Create,msdyn_conversationdata_Update,msdyn_conversationdata_Select>;
}
