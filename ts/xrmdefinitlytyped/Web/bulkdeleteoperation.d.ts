interface BulkDeleteOperation_Base extends WebEntity {
  bulkdeleteoperationid?: string | null;
  createdon?: Date | null;
  failurecount?: number | null;
  isrecurring?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  nextrun?: Date | null;
  orderedquerysetxml?: string | null;
  processingqeindex?: number | null;
  statecode?: bulkdeleteoperation_statecode | null;
  statuscode?: bulkdeleteoperation_statuscode | null;
  successcount?: number | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
}
interface BulkDeleteOperation_Relationships {
  BulkDeleteOperation_BulkDeleteFailure?: BulkDeleteFailure_Result[] | null;
  userentityinstancedata_bulkdeleteoperation?: UserEntityInstanceData_Result[] | null;
}
interface BulkDeleteOperation extends BulkDeleteOperation_Base, BulkDeleteOperation_Relationships {
}
interface BulkDeleteOperation_Create extends BulkDeleteOperation {
}
interface BulkDeleteOperation_Update extends BulkDeleteOperation {
}
interface BulkDeleteOperation_Select {
  asyncoperationid_guid: WebAttribute<BulkDeleteOperation_Select, { asyncoperationid_guid: string | null }, { asyncoperationid_formatted?: string }>;
  bulkdeleteoperationid: WebAttribute<BulkDeleteOperation_Select, { bulkdeleteoperationid: string | null }, {  }>;
  createdby_guid: WebAttribute<BulkDeleteOperation_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<BulkDeleteOperation_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<BulkDeleteOperation_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  failurecount: WebAttribute<BulkDeleteOperation_Select, { failurecount: number | null }, {  }>;
  isrecurring: WebAttribute<BulkDeleteOperation_Select, { isrecurring: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<BulkDeleteOperation_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<BulkDeleteOperation_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<BulkDeleteOperation_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<BulkDeleteOperation_Select, { name: string | null }, {  }>;
  nextrun: WebAttribute<BulkDeleteOperation_Select, { nextrun: Date | null }, { nextrun_formatted?: string }>;
  orderedquerysetxml: WebAttribute<BulkDeleteOperation_Select, { orderedquerysetxml: string | null }, {  }>;
  ownerid_guid: WebAttribute<BulkDeleteOperation_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<BulkDeleteOperation_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owninguser_guid: WebAttribute<BulkDeleteOperation_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  processingqeindex: WebAttribute<BulkDeleteOperation_Select, { processingqeindex: number | null }, {  }>;
  statecode: WebAttribute<BulkDeleteOperation_Select, { statecode: bulkdeleteoperation_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<BulkDeleteOperation_Select, { statuscode: bulkdeleteoperation_statuscode | null }, { statuscode_formatted?: string }>;
  successcount: WebAttribute<BulkDeleteOperation_Select, { successcount: number | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<BulkDeleteOperation_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<BulkDeleteOperation_Select, { utcconversiontimezonecode: number | null }, {  }>;
}
interface BulkDeleteOperation_Filter {
  asyncoperationid_guid: XQW.Guid;
  bulkdeleteoperationid: XQW.Guid;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  failurecount: number;
  isrecurring: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  nextrun: Date;
  orderedquerysetxml: string;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  processingqeindex: number;
  statecode: bulkdeleteoperation_statecode;
  statuscode: bulkdeleteoperation_statuscode;
  successcount: number;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
}
interface BulkDeleteOperation_Expand {
  BulkDeleteOperation_BulkDeleteFailure: WebExpand<BulkDeleteOperation_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { BulkDeleteOperation_BulkDeleteFailure: BulkDeleteFailure_Result[] }>;
  asyncoperationid: WebExpand<BulkDeleteOperation_Expand, AsyncOperation_Select, AsyncOperation_Filter, { asyncoperationid: AsyncOperation_Result }>;
  createdby: WebExpand<BulkDeleteOperation_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<BulkDeleteOperation_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<BulkDeleteOperation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<BulkDeleteOperation_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  owningbusinessunit: WebExpand<BulkDeleteOperation_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  userentityinstancedata_bulkdeleteoperation: WebExpand<BulkDeleteOperation_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_bulkdeleteoperation: UserEntityInstanceData_Result[] }>;
}
interface BulkDeleteOperation_FormattedResult {
  asyncoperationid_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  nextrun_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface BulkDeleteOperation_Result extends BulkDeleteOperation_Base, BulkDeleteOperation_Relationships {
  "@odata.etag": string;
  asyncoperationid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owninguser_guid: string | null;
}
interface BulkDeleteOperation_RelatedOne {
  asyncoperationid: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
}
interface BulkDeleteOperation_RelatedMany {
  BulkDeleteOperation_BulkDeleteFailure: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  userentityinstancedata_bulkdeleteoperation: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  bulkdeleteoperations: WebMappingRetrieve<BulkDeleteOperation_Select,BulkDeleteOperation_Expand,BulkDeleteOperation_Filter,BulkDeleteOperation_Fixed,BulkDeleteOperation_Result,BulkDeleteOperation_FormattedResult>;
}
interface WebEntitiesRelated {
  bulkdeleteoperations: WebMappingRelated<BulkDeleteOperation_RelatedOne,BulkDeleteOperation_RelatedMany>;
}
interface WebEntitiesCUDA {
  bulkdeleteoperations: WebMappingCUDA<BulkDeleteOperation_Create,BulkDeleteOperation_Update,BulkDeleteOperation_Select>;
}
