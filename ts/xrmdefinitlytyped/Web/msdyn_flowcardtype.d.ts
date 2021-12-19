interface msdyn_flowcardtype_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_actioncommand?: string | null;
  msdyn_actionname?: string | null;
  msdyn_cardname?: string | null;
  msdyn_description?: string | null;
  msdyn_flowcardtypeid?: string | null;
  msdyn_flowname?: string | null;
  msdyn_iscdsflow?: boolean | null;
  msdyn_isdeleted?: boolean | null;
  msdyn_name?: string | null;
  msdyn_samplebody?: string | null;
  msdyn_sampletitle?: string | null;
  msdyn_workflowid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_flowcardtype_statecode | null;
  statuscode?: msdyn_flowcardtype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_flowcardtype_Relationships {
  msdyn_flowcardtype_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_flowcardtype_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_flowcardtype_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_flowcardtype_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_flowcardtype_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_flowcardtype_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_flowcardtype_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_flowcardtype_SyncErrors?: SyncError_Result[] | null;
  msdyn_flowcardtype_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_flowcardtype extends msdyn_flowcardtype_Base, msdyn_flowcardtype_Relationships {
  msdyn_cardtypeid_bind$cardtype?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_flowcardtype_Create extends msdyn_flowcardtype {
}
interface msdyn_flowcardtype_Update extends msdyn_flowcardtype {
}
interface msdyn_flowcardtype_Select {
  createdby_guid: WebAttribute<msdyn_flowcardtype_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_flowcardtype_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_flowcardtype_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_flowcardtype_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_flowcardtype_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_flowcardtype_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_flowcardtype_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_actioncommand: WebAttribute<msdyn_flowcardtype_Select, { msdyn_actioncommand: string | null }, {  }>;
  msdyn_actionname: WebAttribute<msdyn_flowcardtype_Select, { msdyn_actionname: string | null }, {  }>;
  msdyn_cardname: WebAttribute<msdyn_flowcardtype_Select, { msdyn_cardname: string | null }, {  }>;
  msdyn_cardtypeid_guid: WebAttribute<msdyn_flowcardtype_Select, { msdyn_cardtypeid_guid: string | null }, { msdyn_cardtypeid_formatted?: string }>;
  msdyn_description: WebAttribute<msdyn_flowcardtype_Select, { msdyn_description: string | null }, {  }>;
  msdyn_flowcardtypeid: WebAttribute<msdyn_flowcardtype_Select, { msdyn_flowcardtypeid: string | null }, {  }>;
  msdyn_flowname: WebAttribute<msdyn_flowcardtype_Select, { msdyn_flowname: string | null }, {  }>;
  msdyn_iscdsflow: WebAttribute<msdyn_flowcardtype_Select, { msdyn_iscdsflow: boolean | null }, {  }>;
  msdyn_isdeleted: WebAttribute<msdyn_flowcardtype_Select, { msdyn_isdeleted: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_flowcardtype_Select, { msdyn_name: string | null }, {  }>;
  msdyn_samplebody: WebAttribute<msdyn_flowcardtype_Select, { msdyn_samplebody: string | null }, {  }>;
  msdyn_sampletitle: WebAttribute<msdyn_flowcardtype_Select, { msdyn_sampletitle: string | null }, {  }>;
  msdyn_workflowid: WebAttribute<msdyn_flowcardtype_Select, { msdyn_workflowid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_flowcardtype_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_flowcardtype_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_flowcardtype_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_flowcardtype_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_flowcardtype_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_flowcardtype_Select, { statecode: msdyn_flowcardtype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_flowcardtype_Select, { statuscode: msdyn_flowcardtype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_flowcardtype_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_flowcardtype_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_flowcardtype_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_flowcardtype_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_actioncommand: string;
  msdyn_actionname: string;
  msdyn_cardname: string;
  msdyn_cardtypeid_guid: XQW.Guid;
  msdyn_description: string;
  msdyn_flowcardtypeid: XQW.Guid;
  msdyn_flowname: string;
  msdyn_iscdsflow: boolean;
  msdyn_isdeleted: boolean;
  msdyn_name: string;
  msdyn_samplebody: string;
  msdyn_sampletitle: string;
  msdyn_workflowid: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_flowcardtype_statecode;
  statuscode: msdyn_flowcardtype_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_flowcardtype_Expand {
  createdby: WebExpand<msdyn_flowcardtype_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_flowcardtype_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_flowcardtype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_flowcardtype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_cardtypeid: WebExpand<msdyn_flowcardtype_Expand, CardType_Select, CardType_Filter, { msdyn_cardtypeid: CardType_Result }>;
  msdyn_flowcardtype_AsyncOperations: WebExpand<msdyn_flowcardtype_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_flowcardtype_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_flowcardtype_BulkDeleteFailures: WebExpand<msdyn_flowcardtype_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_flowcardtype_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_flowcardtype_DuplicateBaseRecord: WebExpand<msdyn_flowcardtype_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_flowcardtype_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_flowcardtype_DuplicateMatchingRecord: WebExpand<msdyn_flowcardtype_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_flowcardtype_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_flowcardtype_MailboxTrackingFolders: WebExpand<msdyn_flowcardtype_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_flowcardtype_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_flowcardtype_PrincipalObjectAttributeAccesses: WebExpand<msdyn_flowcardtype_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_flowcardtype_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_flowcardtype_ProcessSession: WebExpand<msdyn_flowcardtype_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_flowcardtype_ProcessSession: ProcessSession_Result[] }>;
  msdyn_flowcardtype_SyncErrors: WebExpand<msdyn_flowcardtype_Expand, SyncError_Select, SyncError_Filter, { msdyn_flowcardtype_SyncErrors: SyncError_Result[] }>;
  msdyn_flowcardtype_UserEntityInstanceDatas: WebExpand<msdyn_flowcardtype_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_flowcardtype_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_flowcardtype_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_flowcardtype_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_flowcardtype_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_flowcardtype_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_flowcardtype_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_cardtypeid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_flowcardtype_Result extends msdyn_flowcardtype_Base, msdyn_flowcardtype_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_cardtypeid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_flowcardtype_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_cardtypeid: WebMappingRetrieve<CardType_Select,CardType_Expand,CardType_Filter,CardType_Fixed,CardType_Result,CardType_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_flowcardtype_RelatedMany {
  msdyn_flowcardtype_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_flowcardtype_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_flowcardtype_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_flowcardtype_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_flowcardtype_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_flowcardtype_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_flowcardtype_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_flowcardtype_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_flowcardtype_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_flowcardtypes: WebMappingRetrieve<msdyn_flowcardtype_Select,msdyn_flowcardtype_Expand,msdyn_flowcardtype_Filter,msdyn_flowcardtype_Fixed,msdyn_flowcardtype_Result,msdyn_flowcardtype_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_flowcardtypes: WebMappingRelated<msdyn_flowcardtype_RelatedOne,msdyn_flowcardtype_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_flowcardtypes: WebMappingCUDA<msdyn_flowcardtype_Create,msdyn_flowcardtype_Update,msdyn_flowcardtype_Select>;
}
