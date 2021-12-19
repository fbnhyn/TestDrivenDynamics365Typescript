interface msdyn_workordertype_Base extends WebEntity {
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  msdyn_incidentrequired?: boolean | null;
  msdyn_name?: string | null;
  msdyn_taxable?: boolean | null;
  msdyn_workordertypeid?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_workordertype_statecode | null;
  statuscode?: msdyn_workordertype_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_workordertype_Relationships {
  msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType?: msdyn_actual_Result[] | null;
  msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType?: msdyn_agreementbookingsetup_Result[] | null;
  msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType?: msdyn_incidenttype_Result[] | null;
  msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType?: msdyn_quotebookingsetup_Result[] | null;
  msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType?: msdyn_workorder_Result[] | null;
  msdyn_msdyn_workordertype_opportunity_WorkOrderType?: Opportunity_Result[] | null;
  msdyn_workordertype_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_workordertype_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_workordertype_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  msdyn_workordertype_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  msdyn_workordertype_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_workordertype_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_workordertype_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_workordertype_SyncErrors?: SyncError_Result[] | null;
  msdyn_workordertype_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface msdyn_workordertype extends msdyn_workordertype_Base, msdyn_workordertype_Relationships {
  msdyn_pricelist_bind$pricelevels?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
}
interface msdyn_workordertype_Create extends msdyn_workordertype {
}
interface msdyn_workordertype_Update extends msdyn_workordertype {
}
interface msdyn_workordertype_Select {
  createdby_guid: WebAttribute<msdyn_workordertype_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_workordertype_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_workordertype_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_workordertype_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_workordertype_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_workordertype_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_workordertype_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_incidentrequired: WebAttribute<msdyn_workordertype_Select, { msdyn_incidentrequired: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_workordertype_Select, { msdyn_name: string | null }, {  }>;
  msdyn_pricelist_guid: WebAttribute<msdyn_workordertype_Select, { msdyn_pricelist_guid: string | null }, { msdyn_pricelist_formatted?: string }>;
  msdyn_taxable: WebAttribute<msdyn_workordertype_Select, { msdyn_taxable: boolean | null }, {  }>;
  msdyn_workordertypeid: WebAttribute<msdyn_workordertype_Select, { msdyn_workordertypeid: string | null }, {  }>;
  overriddencreatedon: WebAttribute<msdyn_workordertype_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<msdyn_workordertype_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<msdyn_workordertype_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<msdyn_workordertype_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<msdyn_workordertype_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<msdyn_workordertype_Select, { statecode: msdyn_workordertype_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_workordertype_Select, { statuscode: msdyn_workordertype_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_workordertype_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_workordertype_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_workordertype_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_workordertype_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_incidentrequired: boolean;
  msdyn_name: string;
  msdyn_pricelist_guid: XQW.Guid;
  msdyn_taxable: boolean;
  msdyn_workordertypeid: XQW.Guid;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: msdyn_workordertype_statecode;
  statuscode: msdyn_workordertype_statuscode;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_workordertype_Expand {
  createdby: WebExpand<msdyn_workordertype_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_workordertype_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_workordertype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_workordertype_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType: WebExpand<msdyn_workordertype_Expand, msdyn_actual_Select, msdyn_actual_Filter, { msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType: msdyn_actual_Result[] }>;
  msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType: WebExpand<msdyn_workordertype_Expand, msdyn_agreementbookingsetup_Select, msdyn_agreementbookingsetup_Filter, { msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType: msdyn_agreementbookingsetup_Result[] }>;
  msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType: WebExpand<msdyn_workordertype_Expand, msdyn_incidenttype_Select, msdyn_incidenttype_Filter, { msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType: msdyn_incidenttype_Result[] }>;
  msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType: WebExpand<msdyn_workordertype_Expand, msdyn_quotebookingsetup_Select, msdyn_quotebookingsetup_Filter, { msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType: msdyn_quotebookingsetup_Result[] }>;
  msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType: WebExpand<msdyn_workordertype_Expand, msdyn_workorder_Select, msdyn_workorder_Filter, { msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType: msdyn_workorder_Result[] }>;
  msdyn_msdyn_workordertype_opportunity_WorkOrderType: WebExpand<msdyn_workordertype_Expand, Opportunity_Select, Opportunity_Filter, { msdyn_msdyn_workordertype_opportunity_WorkOrderType: Opportunity_Result[] }>;
  msdyn_pricelist: WebExpand<msdyn_workordertype_Expand, PriceLevel_Select, PriceLevel_Filter, { msdyn_pricelist: PriceLevel_Result }>;
  msdyn_workordertype_AsyncOperations: WebExpand<msdyn_workordertype_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_workordertype_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_workordertype_BulkDeleteFailures: WebExpand<msdyn_workordertype_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_workordertype_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_workordertype_DuplicateBaseRecord: WebExpand<msdyn_workordertype_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_workordertype_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  msdyn_workordertype_DuplicateMatchingRecord: WebExpand<msdyn_workordertype_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { msdyn_workordertype_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  msdyn_workordertype_MailboxTrackingFolders: WebExpand<msdyn_workordertype_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_workordertype_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_workordertype_PrincipalObjectAttributeAccesses: WebExpand<msdyn_workordertype_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_workordertype_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_workordertype_ProcessSession: WebExpand<msdyn_workordertype_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_workordertype_ProcessSession: ProcessSession_Result[] }>;
  msdyn_workordertype_SyncErrors: WebExpand<msdyn_workordertype_Expand, SyncError_Select, SyncError_Filter, { msdyn_workordertype_SyncErrors: SyncError_Result[] }>;
  msdyn_workordertype_UserEntityInstanceDatas: WebExpand<msdyn_workordertype_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_workordertype_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  ownerid: WebExpand<msdyn_workordertype_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<msdyn_workordertype_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<msdyn_workordertype_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<msdyn_workordertype_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
}
interface msdyn_workordertype_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_pricelist_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_workordertype_Result extends msdyn_workordertype_Base, msdyn_workordertype_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_pricelist_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
}
interface msdyn_workordertype_RelatedOne {
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_pricelist: WebMappingRetrieve<PriceLevel_Select,PriceLevel_Expand,PriceLevel_Filter,PriceLevel_Fixed,PriceLevel_Result,PriceLevel_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
}
interface msdyn_workordertype_RelatedMany {
  msdyn_msdyn_workordertype_msdyn_actual_WorkOrderType: WebMappingRetrieve<msdyn_actual_Select,msdyn_actual_Expand,msdyn_actual_Filter,msdyn_actual_Fixed,msdyn_actual_Result,msdyn_actual_FormattedResult>;
  msdyn_msdyn_workordertype_msdyn_agreementbookingsetup_WorkOrderType: WebMappingRetrieve<msdyn_agreementbookingsetup_Select,msdyn_agreementbookingsetup_Expand,msdyn_agreementbookingsetup_Filter,msdyn_agreementbookingsetup_Fixed,msdyn_agreementbookingsetup_Result,msdyn_agreementbookingsetup_FormattedResult>;
  msdyn_msdyn_workordertype_msdyn_incidenttype_DefaultWorkOrderType: WebMappingRetrieve<msdyn_incidenttype_Select,msdyn_incidenttype_Expand,msdyn_incidenttype_Filter,msdyn_incidenttype_Fixed,msdyn_incidenttype_Result,msdyn_incidenttype_FormattedResult>;
  msdyn_msdyn_workordertype_msdyn_quotebookingsetup_WorkOrderType: WebMappingRetrieve<msdyn_quotebookingsetup_Select,msdyn_quotebookingsetup_Expand,msdyn_quotebookingsetup_Filter,msdyn_quotebookingsetup_Fixed,msdyn_quotebookingsetup_Result,msdyn_quotebookingsetup_FormattedResult>;
  msdyn_msdyn_workordertype_msdyn_workorder_WorkOrderType: WebMappingRetrieve<msdyn_workorder_Select,msdyn_workorder_Expand,msdyn_workorder_Filter,msdyn_workorder_Fixed,msdyn_workorder_Result,msdyn_workorder_FormattedResult>;
  msdyn_msdyn_workordertype_opportunity_WorkOrderType: WebMappingRetrieve<Opportunity_Select,Opportunity_Expand,Opportunity_Filter,Opportunity_Fixed,Opportunity_Result,Opportunity_FormattedResult>;
  msdyn_workordertype_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_workordertype_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_workordertype_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_workordertype_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  msdyn_workordertype_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_workordertype_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_workordertype_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_workordertype_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_workordertype_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_workordertypes: WebMappingRetrieve<msdyn_workordertype_Select,msdyn_workordertype_Expand,msdyn_workordertype_Filter,msdyn_workordertype_Fixed,msdyn_workordertype_Result,msdyn_workordertype_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_workordertypes: WebMappingRelated<msdyn_workordertype_RelatedOne,msdyn_workordertype_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_workordertypes: WebMappingCUDA<msdyn_workordertype_Create,msdyn_workordertype_Update,msdyn_workordertype_Select>;
}
