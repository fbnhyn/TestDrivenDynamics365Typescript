interface SharePointSite_Base extends WebEntity {
  absoluteurl?: string | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  folderstructureentity?: string | null;
  importsequencenumber?: number | null;
  isdefault?: boolean | null;
  isgridpresent?: boolean | null;
  ispowerbisite?: boolean | null;
  lastvalidated?: Date | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  relativeurl?: string | null;
  servicetype?: sharepointsite_servicetype | null;
  sharepointsiteid?: string | null;
  sitecollectionid?: string | null;
  statecode?: sharepointsite_statecode | null;
  statuscode?: sharepointsite_statuscode | null;
  timezoneruleversionnumber?: number | null;
  userid?: string | null;
  utcconversiontimezonecode?: number | null;
  validationstatus?: sharepoint_validationstatus | null;
  validationstatuserrorcode?: sharepoint_validationstatusreason | null;
  versionnumber?: number | null;
}
interface SharePointSite_Relationships {
  SharePointSite_AsyncOperations?: AsyncOperation_Result[] | null;
  SharePointSite_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  SharePointSite_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  SharePointSite_ProcessSessions?: ProcessSession_Result[] | null;
  SharePointSite_SyncErrors?: SyncError_Result[] | null;
  sharepointdocumentlocation_parent_sharepointsite?: SharePointDocumentLocation_Result[] | null;
  sharepointsite_parentsite_sharepointsite?: SharePointSite_Result[] | null;
  sharepointsite_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  userentityinstancedata_sharepointsite?: UserEntityInstanceData_Result[] | null;
}
interface SharePointSite extends SharePointSite_Base, SharePointSite_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  parentsite_bind$sharepointsites?: string | null;
}
interface SharePointSite_Create extends SharePointSite {
}
interface SharePointSite_Update extends SharePointSite {
}
interface SharePointSite_Select {
  absoluteurl: WebAttribute<SharePointSite_Select, { absoluteurl: string | null }, {  }>;
  createdby_guid: WebAttribute<SharePointSite_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SharePointSite_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SharePointSite_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<SharePointSite_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<SharePointSite_Select, { exchangerate: number | null }, {  }>;
  folderstructureentity: WebAttribute<SharePointSite_Select, { folderstructureentity: string | null }, {  }>;
  importsequencenumber: WebAttribute<SharePointSite_Select, { importsequencenumber: number | null }, {  }>;
  isdefault: WebAttribute<SharePointSite_Select, { isdefault: boolean | null }, {  }>;
  isgridpresent: WebAttribute<SharePointSite_Select, { isgridpresent: boolean | null }, {  }>;
  ispowerbisite: WebAttribute<SharePointSite_Select, { ispowerbisite: boolean | null }, {  }>;
  lastvalidated: WebAttribute<SharePointSite_Select, { lastvalidated: Date | null }, { lastvalidated_formatted?: string }>;
  modifiedby_guid: WebAttribute<SharePointSite_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SharePointSite_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SharePointSite_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SharePointSite_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<SharePointSite_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<SharePointSite_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<SharePointSite_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<SharePointSite_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<SharePointSite_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  parentsite_guid: WebAttribute<SharePointSite_Select, { parentsite_guid: string | null }, { parentsite_formatted?: string }>;
  relativeurl: WebAttribute<SharePointSite_Select, { relativeurl: string | null }, {  }>;
  servicetype: WebAttribute<SharePointSite_Select, { servicetype: sharepointsite_servicetype | null }, { servicetype_formatted?: string }>;
  sharepointsiteid: WebAttribute<SharePointSite_Select, { sharepointsiteid: string | null }, {  }>;
  sitecollectionid: WebAttribute<SharePointSite_Select, { sitecollectionid: string | null }, {  }>;
  statecode: WebAttribute<SharePointSite_Select, { statecode: sharepointsite_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<SharePointSite_Select, { statuscode: sharepointsite_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<SharePointSite_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<SharePointSite_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  userid: WebAttribute<SharePointSite_Select, { userid: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<SharePointSite_Select, { utcconversiontimezonecode: number | null }, {  }>;
  validationstatus: WebAttribute<SharePointSite_Select, { validationstatus: sharepoint_validationstatus | null }, { validationstatus_formatted?: string }>;
  validationstatuserrorcode: WebAttribute<SharePointSite_Select, { validationstatuserrorcode: sharepoint_validationstatusreason | null }, { validationstatuserrorcode_formatted?: string }>;
  versionnumber: WebAttribute<SharePointSite_Select, { versionnumber: number | null }, {  }>;
}
interface SharePointSite_Filter {
  absoluteurl: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  folderstructureentity: string;
  importsequencenumber: number;
  isdefault: boolean;
  isgridpresent: boolean;
  ispowerbisite: boolean;
  lastvalidated: Date;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  parentsite_guid: XQW.Guid;
  relativeurl: string;
  servicetype: sharepointsite_servicetype;
  sharepointsiteid: XQW.Guid;
  sitecollectionid: XQW.Guid;
  statecode: sharepointsite_statecode;
  statuscode: sharepointsite_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  userid: XQW.Guid;
  utcconversiontimezonecode: number;
  validationstatus: sharepoint_validationstatus;
  validationstatuserrorcode: sharepoint_validationstatusreason;
  versionnumber: number;
}
interface SharePointSite_Expand {
  SharePointSite_AsyncOperations: WebExpand<SharePointSite_Expand, AsyncOperation_Select, AsyncOperation_Filter, { SharePointSite_AsyncOperations: AsyncOperation_Result[] }>;
  SharePointSite_DuplicateBaseRecord: WebExpand<SharePointSite_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { SharePointSite_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  SharePointSite_DuplicateMatchingRecord: WebExpand<SharePointSite_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { SharePointSite_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  SharePointSite_ProcessSessions: WebExpand<SharePointSite_Expand, ProcessSession_Select, ProcessSession_Filter, { SharePointSite_ProcessSessions: ProcessSession_Result[] }>;
  SharePointSite_SyncErrors: WebExpand<SharePointSite_Expand, SyncError_Select, SyncError_Filter, { SharePointSite_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<SharePointSite_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SharePointSite_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SharePointSite_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SharePointSite_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  ownerid: WebExpand<SharePointSite_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<SharePointSite_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<SharePointSite_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<SharePointSite_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  parentsite: WebExpand<SharePointSite_Expand, SharePointSite_Select, SharePointSite_Filter, { parentsite: SharePointSite_Result }>;
  sharepointdocumentlocation_parent_sharepointsite: WebExpand<SharePointSite_Expand, SharePointDocumentLocation_Select, SharePointDocumentLocation_Filter, { sharepointdocumentlocation_parent_sharepointsite: SharePointDocumentLocation_Result[] }>;
  sharepointsite_parentsite_sharepointsite: WebExpand<SharePointSite_Expand, SharePointSite_Select, SharePointSite_Filter, { sharepointsite_parentsite_sharepointsite: SharePointSite_Result[] }>;
  sharepointsite_principalobjectattributeaccess: WebExpand<SharePointSite_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { sharepointsite_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  transactioncurrencyid: WebExpand<SharePointSite_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  userentityinstancedata_sharepointsite: WebExpand<SharePointSite_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_sharepointsite: UserEntityInstanceData_Result[] }>;
}
interface SharePointSite_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  lastvalidated_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  parentsite_formatted?: string;
  servicetype_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
  validationstatus_formatted?: string;
  validationstatuserrorcode_formatted?: string;
}
interface SharePointSite_Result extends SharePointSite_Base, SharePointSite_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  parentsite_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface SharePointSite_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  parentsite: WebMappingRetrieve<SharePointSite_Select,SharePointSite_Expand,SharePointSite_Filter,SharePointSite_Fixed,SharePointSite_Result,SharePointSite_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface SharePointSite_RelatedMany {
  SharePointSite_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  SharePointSite_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  SharePointSite_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  SharePointSite_ProcessSessions: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  SharePointSite_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  sharepointdocumentlocation_parent_sharepointsite: WebMappingRetrieve<SharePointDocumentLocation_Select,SharePointDocumentLocation_Expand,SharePointDocumentLocation_Filter,SharePointDocumentLocation_Fixed,SharePointDocumentLocation_Result,SharePointDocumentLocation_FormattedResult>;
  sharepointsite_parentsite_sharepointsite: WebMappingRetrieve<SharePointSite_Select,SharePointSite_Expand,SharePointSite_Filter,SharePointSite_Fixed,SharePointSite_Result,SharePointSite_FormattedResult>;
  sharepointsite_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  userentityinstancedata_sharepointsite: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  sharepointsites: WebMappingRetrieve<SharePointSite_Select,SharePointSite_Expand,SharePointSite_Filter,SharePointSite_Fixed,SharePointSite_Result,SharePointSite_FormattedResult>;
}
interface WebEntitiesRelated {
  sharepointsites: WebMappingRelated<SharePointSite_RelatedOne,SharePointSite_RelatedMany>;
}
interface WebEntitiesCUDA {
  sharepointsites: WebMappingCUDA<SharePointSite_Create,SharePointSite_Update,SharePointSite_Select>;
}
