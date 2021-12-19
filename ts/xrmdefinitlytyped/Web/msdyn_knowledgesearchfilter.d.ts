interface msdyn_knowledgesearchfilter_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_attributename?: string | null;
  msdyn_defaultvalues?: string | null;
  msdyn_enabled?: boolean | null;
  msdyn_entityname?: string | null;
  msdyn_iscustom?: boolean | null;
  msdyn_knowledgesearchfilterid?: string | null;
  msdyn_name?: string | null;
  msdyn_orderid?: number | null;
  msdyn_selectedvalues?: string | null;
  msdyn_uniquename?: string | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  statecode?: msdyn_knowledgesearchfilter_statecode | null;
  statuscode?: msdyn_knowledgesearchfilter_statuscode | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_knowledgesearchfilter_Relationships {
  msdyn_knowledgesearchfilter_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_knowledgesearchfilter_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_knowledgesearchfilter_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_knowledgesearchfilter_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_knowledgesearchfilter_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_knowledgesearchfilter_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_knowledgesearchfilter_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_knowledgesearchfilter_SyncErrors?: SyncError_Result[] | null;
  msdyn_knowledgesearchfilter_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_knowledgesearchfilter extends msdyn_knowledgesearchfilter_Base, msdyn_knowledgesearchfilter_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_knowledgesearchfilter_Create extends msdyn_knowledgesearchfilter {
}
interface msdyn_knowledgesearchfilter_Update extends msdyn_knowledgesearchfilter {
}
interface msdyn_knowledgesearchfilter_Select {
  componentidunique: WebAttribute<msdyn_knowledgesearchfilter_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_knowledgesearchfilter_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_knowledgesearchfilter_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_knowledgesearchfilter_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_knowledgesearchfilter_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_knowledgesearchfilter_Select, { importsequencenumber: number | null }, {  }>;
  iscustomizable: WebAttribute<msdyn_knowledgesearchfilter_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_knowledgesearchfilter_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_knowledgesearchfilter_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_knowledgesearchfilter_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_knowledgesearchfilter_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_attributename: WebAttribute<msdyn_knowledgesearchfilter_Select, { msdyn_attributename: string | null }, {  }>;
  msdyn_defaultvalues: WebAttribute<msdyn_knowledgesearchfilter_Select, { msdyn_defaultvalues: string | null }, {  }>;
  msdyn_enabled: WebAttribute<msdyn_knowledgesearchfilter_Select, { msdyn_enabled: boolean | null }, {  }>;
  msdyn_entityname: WebAttribute<msdyn_knowledgesearchfilter_Select, { msdyn_entityname: string | null }, {  }>;
  msdyn_iscustom: WebAttribute<msdyn_knowledgesearchfilter_Select, { msdyn_iscustom: boolean | null }, {  }>;
  msdyn_knowledgesearchfilterid: WebAttribute<msdyn_knowledgesearchfilter_Select, { msdyn_knowledgesearchfilterid: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_knowledgesearchfilter_Select, { msdyn_name: string | null }, {  }>;
  msdyn_orderid: WebAttribute<msdyn_knowledgesearchfilter_Select, { msdyn_orderid: number | null }, {  }>;
  msdyn_selectedvalues: WebAttribute<msdyn_knowledgesearchfilter_Select, { msdyn_selectedvalues: string | null }, {  }>;
  msdyn_uniquename: WebAttribute<msdyn_knowledgesearchfilter_Select, { msdyn_uniquename: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_knowledgesearchfilter_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<msdyn_knowledgesearchfilter_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_knowledgesearchfilter_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_knowledgesearchfilter_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_knowledgesearchfilter_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_knowledgesearchfilter_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  solutionid: WebAttribute<msdyn_knowledgesearchfilter_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<msdyn_knowledgesearchfilter_Select, { statecode: msdyn_knowledgesearchfilter_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_knowledgesearchfilter_Select, { statuscode: msdyn_knowledgesearchfilter_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<msdyn_knowledgesearchfilter_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<msdyn_knowledgesearchfilter_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_knowledgesearchfilter_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_knowledgesearchfilter_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_knowledgesearchfilter_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  iscustomizable: any;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_attributename: string;
  msdyn_defaultvalues: string;
  msdyn_enabled: boolean;
  msdyn_entityname: string;
  msdyn_iscustom: boolean;
  msdyn_knowledgesearchfilterid: XQW.Guid;
  msdyn_name: string;
  msdyn_orderid: number;
  msdyn_selectedvalues: string;
  msdyn_uniquename: string;
  overriddencreatedon: Date;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: msdyn_knowledgesearchfilter_statecode;
  statuscode: msdyn_knowledgesearchfilter_statuscode;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_knowledgesearchfilter_Expand {
  createdby: WebExpand<msdyn_knowledgesearchfilter_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_knowledgesearchfilter_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_knowledgesearchfilter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_knowledgesearchfilter_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_knowledgesearchfilter_AsyncOperations: WebExpand<msdyn_knowledgesearchfilter_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_knowledgesearchfilter_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_knowledgesearchfilter_BulkDeleteFailures: WebExpand<msdyn_knowledgesearchfilter_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_knowledgesearchfilter_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_knowledgesearchfilter_DuplicateBaseRecord: WebExpand<msdyn_knowledgesearchfilter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_knowledgesearchfilter_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_knowledgesearchfilter_DuplicateMatchingRecord: WebExpand<msdyn_knowledgesearchfilter_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_knowledgesearchfilter_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_knowledgesearchfilter_MailboxTrackingFolders: WebExpand<msdyn_knowledgesearchfilter_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_knowledgesearchfilter_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_knowledgesearchfilter_PrincipalObjectAttributeAccesses: WebExpand<msdyn_knowledgesearchfilter_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_knowledgesearchfilter_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_knowledgesearchfilter_ProcessSession: WebExpand<msdyn_knowledgesearchfilter_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_knowledgesearchfilter_ProcessSession: ProcessSession_Result[] }>;
  msdyn_knowledgesearchfilter_SyncErrors: WebExpand<msdyn_knowledgesearchfilter_Expand, SyncError_Select, SyncError_Filter, { msdyn_knowledgesearchfilter_SyncErrors: SyncError_Result[] }>;
  msdyn_knowledgesearchfilter_UserEntityInstanceDatas: WebExpand<msdyn_knowledgesearchfilter_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_knowledgesearchfilter_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_knowledgesearchfilter_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_knowledgesearchfilter_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_knowledgesearchfilter_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_knowledgesearchfilter_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_knowledgesearchfilter_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_knowledgesearchfilter_Result extends msdyn_knowledgesearchfilter_Base, msdyn_knowledgesearchfilter_Relationships {
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
interface msdyn_knowledgesearchfilter_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_knowledgesearchfilter_RelatedMany {
  msdyn_knowledgesearchfilter_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_knowledgesearchfilter_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_knowledgesearchfilter_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_knowledgesearchfilter_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_knowledgesearchfilter_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_knowledgesearchfilter_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_knowledgesearchfilter_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_knowledgesearchfilter_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_knowledgesearchfilter_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_knowledgesearchfilters: WebMappingRetrieve<msdyn_knowledgesearchfilter_Select,msdyn_knowledgesearchfilter_Expand,msdyn_knowledgesearchfilter_Filter,msdyn_knowledgesearchfilter_Fixed,msdyn_knowledgesearchfilter_Result,msdyn_knowledgesearchfilter_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_knowledgesearchfilters: WebMappingRelated<msdyn_knowledgesearchfilter_RelatedOne,msdyn_knowledgesearchfilter_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_knowledgesearchfilters: WebMappingCUDA<msdyn_knowledgesearchfilter_Create,msdyn_knowledgesearchfilter_Update,msdyn_knowledgesearchfilter_Select>;
}
