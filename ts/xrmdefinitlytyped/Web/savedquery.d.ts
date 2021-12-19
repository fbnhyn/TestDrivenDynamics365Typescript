interface SavedQuery_Base extends WebEntity {
  advancedgroupby?: string | null;
  canbedeleted?: any | null;
  columnsetxml?: string | null;
  componentstate?: componentstate | null;
  conditionalformatting?: string | null;
  createdon?: Date | null;
  description?: string | null;
  fetchxml?: string | null;
  introducedversion?: string | null;
  iscustom?: boolean | null;
  iscustomizable?: any | null;
  isdefault?: boolean | null;
  ismanaged?: boolean | null;
  isprivate?: boolean | null;
  isquickfindquery?: boolean | null;
  isuserdefined?: boolean | null;
  layoutjson?: string | null;
  layoutxml?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  offlinesqlquery?: string | null;
  organizationtaborder?: number | null;
  overwritetime?: Date | null;
  queryapi?: string | null;
  queryappusage?: number | null;
  querytype?: number | null;
  returnedtypecode?: string | null;
  savedqueryid?: string | null;
  savedqueryidunique?: string | null;
  solutionid?: string | null;
  statecode?: savedquery_statecode | null;
  statuscode?: savedquery_statuscode | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface SavedQuery_Relationships {
  SavedQuery_AsyncOperations?: AsyncOperation_Result[] | null;
  SavedQuery_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  SavedQuery_SyncErrors?: SyncError_Result[] | null;
  lk_mobileofflineprofileitem_savedquery?: MobileOfflineProfileItem_Result[] | null;
  userentityinstancedata_savedquery?: UserEntityInstanceData_Result[] | null;
}
interface SavedQuery extends SavedQuery_Base, SavedQuery_Relationships {
}
interface SavedQuery_Create extends SavedQuery {
}
interface SavedQuery_Update extends SavedQuery {
}
interface SavedQuery_Select {
  advancedgroupby: WebAttribute<SavedQuery_Select, { advancedgroupby: string | null }, {  }>;
  canbedeleted: WebAttribute<SavedQuery_Select, { canbedeleted: any | null }, {  }>;
  columnsetxml: WebAttribute<SavedQuery_Select, { columnsetxml: string | null }, {  }>;
  componentstate: WebAttribute<SavedQuery_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  conditionalformatting: WebAttribute<SavedQuery_Select, { conditionalformatting: string | null }, {  }>;
  createdby_guid: WebAttribute<SavedQuery_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SavedQuery_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SavedQuery_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<SavedQuery_Select, { description: string | null }, {  }>;
  fetchxml: WebAttribute<SavedQuery_Select, { fetchxml: string | null }, {  }>;
  introducedversion: WebAttribute<SavedQuery_Select, { introducedversion: string | null }, {  }>;
  iscustom: WebAttribute<SavedQuery_Select, { iscustom: boolean | null }, {  }>;
  iscustomizable: WebAttribute<SavedQuery_Select, { iscustomizable: any | null }, {  }>;
  isdefault: WebAttribute<SavedQuery_Select, { isdefault: boolean | null }, {  }>;
  ismanaged: WebAttribute<SavedQuery_Select, { ismanaged: boolean | null }, {  }>;
  isprivate: WebAttribute<SavedQuery_Select, { isprivate: boolean | null }, {  }>;
  isquickfindquery: WebAttribute<SavedQuery_Select, { isquickfindquery: boolean | null }, {  }>;
  isuserdefined: WebAttribute<SavedQuery_Select, { isuserdefined: boolean | null }, {  }>;
  layoutjson: WebAttribute<SavedQuery_Select, { layoutjson: string | null }, {  }>;
  layoutxml: WebAttribute<SavedQuery_Select, { layoutxml: string | null }, {  }>;
  modifiedby_guid: WebAttribute<SavedQuery_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SavedQuery_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SavedQuery_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<SavedQuery_Select, { name: string | null }, {  }>;
  offlinesqlquery: WebAttribute<SavedQuery_Select, { offlinesqlquery: string | null }, {  }>;
  organizationid_guid: WebAttribute<SavedQuery_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  organizationtaborder: WebAttribute<SavedQuery_Select, { organizationtaborder: number | null }, {  }>;
  overwritetime: WebAttribute<SavedQuery_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  queryapi: WebAttribute<SavedQuery_Select, { queryapi: string | null }, {  }>;
  queryappusage: WebAttribute<SavedQuery_Select, { queryappusage: number | null }, {  }>;
  querytype: WebAttribute<SavedQuery_Select, { querytype: number | null }, {  }>;
  returnedtypecode: WebAttribute<SavedQuery_Select, { returnedtypecode: string | null }, {  }>;
  savedqueryid: WebAttribute<SavedQuery_Select, { savedqueryid: string | null }, {  }>;
  savedqueryidunique: WebAttribute<SavedQuery_Select, { savedqueryidunique: string | null }, {  }>;
  solutionid: WebAttribute<SavedQuery_Select, { solutionid: string | null }, {  }>;
  statecode: WebAttribute<SavedQuery_Select, { statecode: savedquery_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<SavedQuery_Select, { statuscode: savedquery_statuscode | null }, { statuscode_formatted?: string }>;
  supportingsolutionid: WebAttribute<SavedQuery_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<SavedQuery_Select, { versionnumber: number | null }, {  }>;
}
interface SavedQuery_Filter {
  advancedgroupby: string;
  canbedeleted: any;
  columnsetxml: string;
  componentstate: componentstate;
  conditionalformatting: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  fetchxml: string;
  introducedversion: string;
  iscustom: boolean;
  iscustomizable: any;
  isdefault: boolean;
  ismanaged: boolean;
  isprivate: boolean;
  isquickfindquery: boolean;
  isuserdefined: boolean;
  layoutjson: string;
  layoutxml: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  offlinesqlquery: string;
  organizationid_guid: XQW.Guid;
  organizationtaborder: number;
  overwritetime: Date;
  queryapi: string;
  queryappusage: number;
  querytype: number;
  returnedtypecode: string;
  savedqueryid: XQW.Guid;
  savedqueryidunique: XQW.Guid;
  solutionid: XQW.Guid;
  statecode: savedquery_statecode;
  statuscode: savedquery_statuscode;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface SavedQuery_Expand {
  SavedQuery_AsyncOperations: WebExpand<SavedQuery_Expand, AsyncOperation_Select, AsyncOperation_Filter, { SavedQuery_AsyncOperations: AsyncOperation_Result[] }>;
  SavedQuery_BulkDeleteFailures: WebExpand<SavedQuery_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { SavedQuery_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  SavedQuery_SyncErrors: WebExpand<SavedQuery_Expand, SyncError_Select, SyncError_Filter, { SavedQuery_SyncErrors: SyncError_Result[] }>;
  createdby: WebExpand<SavedQuery_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SavedQuery_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  lk_mobileofflineprofileitem_savedquery: WebExpand<SavedQuery_Expand, MobileOfflineProfileItem_Select, MobileOfflineProfileItem_Filter, { lk_mobileofflineprofileitem_savedquery: MobileOfflineProfileItem_Result[] }>;
  modifiedby: WebExpand<SavedQuery_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SavedQuery_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  organizationid: WebExpand<SavedQuery_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  userentityinstancedata_savedquery: WebExpand<SavedQuery_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_savedquery: UserEntityInstanceData_Result[] }>;
}
interface SavedQuery_FormattedResult {
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface SavedQuery_Result extends SavedQuery_Base, SavedQuery_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
}
interface SavedQuery_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface SavedQuery_RelatedMany {
  SavedQuery_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  SavedQuery_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  SavedQuery_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  lk_mobileofflineprofileitem_savedquery: WebMappingRetrieve<MobileOfflineProfileItem_Select,MobileOfflineProfileItem_Expand,MobileOfflineProfileItem_Filter,MobileOfflineProfileItem_Fixed,MobileOfflineProfileItem_Result,MobileOfflineProfileItem_FormattedResult>;
  userentityinstancedata_savedquery: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  savedqueries: WebMappingRetrieve<SavedQuery_Select,SavedQuery_Expand,SavedQuery_Filter,SavedQuery_Fixed,SavedQuery_Result,SavedQuery_FormattedResult>;
}
interface WebEntitiesRelated {
  savedqueries: WebMappingRelated<SavedQuery_RelatedOne,SavedQuery_RelatedMany>;
}
interface WebEntitiesCUDA {
  savedqueries: WebMappingCUDA<SavedQuery_Create,SavedQuery_Update,SavedQuery_Select>;
}
