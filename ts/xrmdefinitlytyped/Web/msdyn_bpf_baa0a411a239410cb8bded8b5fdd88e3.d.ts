interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Base extends WebEntity {
  activestagestartedon?: Date | null;
  bpf_duration?: number | null;
  bpf_name?: string | null;
  businessprocessflowinstanceid?: string | null;
  completedon?: Date | null;
  createdon?: Date | null;
  importsequencenumber?: number | null;
  modifiedon?: Date | null;
  overriddencreatedon?: Date | null;
  statecode?: msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_statecode | null;
  statuscode?: msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_statuscode | null;
  timezoneruleversionnumber?: number | null;
  traversedpath?: string | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Relationships {
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_AsyncOperations?: AsyncOperation_Result[] | null;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_ProcessSession?: ProcessSession_Result[] | null;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_SyncErrors?: SyncError_Result[] | null;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_WorkflowLogs?: WorkflowLog_Result[] | null;
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 extends msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Base, msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Relationships {
  activestageid_bind$processstages?: string | null;
  bpf_msdyn_agreementbookingsetupid_bind$msdyn_agreementbookingsetups?: string | null;
  bpf_msdyn_agreementid_bind$msdyn_agreements?: string | null;
  bpf_msdyn_agreementinvoicesetupid_bind$msdyn_agreementinvoicesetups?: string | null;
  processid_bind$workflows?: string | null;
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Create extends msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 {
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Update extends msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3 {
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select {
  activestageid_guid: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { activestageid_guid: string | null }, { activestageid_formatted?: string }>;
  activestagestartedon: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { activestagestartedon: Date | null }, { activestagestartedon_formatted?: string }>;
  bpf_duration: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { bpf_duration: number | null }, {  }>;
  bpf_msdyn_agreementbookingsetupid_guid: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { bpf_msdyn_agreementbookingsetupid_guid: string | null }, { bpf_msdyn_agreementbookingsetupid_formatted?: string }>;
  bpf_msdyn_agreementid_guid: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { bpf_msdyn_agreementid_guid: string | null }, { bpf_msdyn_agreementid_formatted?: string }>;
  bpf_msdyn_agreementinvoicesetupid_guid: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { bpf_msdyn_agreementinvoicesetupid_guid: string | null }, { bpf_msdyn_agreementinvoicesetupid_formatted?: string }>;
  bpf_name: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { bpf_name: string | null }, {  }>;
  businessprocessflowinstanceid: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { businessprocessflowinstanceid: string | null }, {  }>;
  completedon: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { completedon: Date | null }, { completedon_formatted?: string }>;
  createdby_guid: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  importsequencenumber: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { importsequencenumber: number | null }, {  }>;
  modifiedby_guid: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  organizationid_guid: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overriddencreatedon: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  processid_guid: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { processid_guid: string | null }, { processid_formatted?: string }>;
  statecode: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { statecode: msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { statuscode: msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { timezoneruleversionnumber: number | null }, {  }>;
  traversedpath: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { traversedpath: string | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Filter {
  activestageid_guid: XQW.Guid;
  activestagestartedon: Date;
  bpf_duration: number;
  bpf_msdyn_agreementbookingsetupid_guid: XQW.Guid;
  bpf_msdyn_agreementid_guid: XQW.Guid;
  bpf_msdyn_agreementinvoicesetupid_guid: XQW.Guid;
  bpf_name: string;
  businessprocessflowinstanceid: XQW.Guid;
  completedon: Date;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  importsequencenumber: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  organizationid_guid: XQW.Guid;
  overriddencreatedon: Date;
  processid_guid: XQW.Guid;
  statecode: msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_statecode;
  statuscode: msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_statuscode;
  timezoneruleversionnumber: number;
  traversedpath: string;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand {
  activestageid: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, ProcessStage_Select, ProcessStage_Filter, { activestageid: ProcessStage_Result }>;
  bpf_msdyn_agreementbookingsetupid: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, msdyn_agreementbookingsetup_Select, msdyn_agreementbookingsetup_Filter, { bpf_msdyn_agreementbookingsetupid: msdyn_agreementbookingsetup_Result }>;
  bpf_msdyn_agreementid: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, msdyn_agreement_Select, msdyn_agreement_Filter, { bpf_msdyn_agreementid: msdyn_agreement_Result }>;
  bpf_msdyn_agreementinvoicesetupid: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, msdyn_agreementinvoicesetup_Select, msdyn_agreementinvoicesetup_Filter, { bpf_msdyn_agreementinvoicesetupid: msdyn_agreementinvoicesetup_Result }>;
  createdby: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_AsyncOperations: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, AsyncOperation_Select, AsyncOperation_Filter, { msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_AsyncOperations: AsyncOperation_Result[] }>;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_BulkDeleteFailures: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_MailboxTrackingFolders: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_PrincipalObjectAttributeAccesses: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_ProcessSession: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, ProcessSession_Select, ProcessSession_Filter, { msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_ProcessSession: ProcessSession_Result[] }>;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_SyncErrors: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, SyncError_Select, SyncError_Filter, { msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_SyncErrors: SyncError_Result[] }>;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_UserEntityInstanceDatas: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_WorkflowLogs: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, WorkflowLog_Select, WorkflowLog_Filter, { msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_WorkflowLogs: WorkflowLog_Result[] }>;
  organizationid: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
  processid: WebExpand<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand, Workflow_Select, Workflow_Filter, { processid: Workflow_Result }>;
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_FormattedResult {
  activestageid_formatted?: string;
  activestagestartedon_formatted?: string;
  bpf_msdyn_agreementbookingsetupid_formatted?: string;
  bpf_msdyn_agreementid_formatted?: string;
  bpf_msdyn_agreementinvoicesetupid_formatted?: string;
  completedon_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  organizationid_formatted?: string;
  overriddencreatedon_formatted?: string;
  processid_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Result extends msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Base, msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Relationships {
  "@odata.etag": string;
  activestageid_guid: string | null;
  bpf_msdyn_agreementbookingsetupid_guid: string | null;
  bpf_msdyn_agreementid_guid: string | null;
  bpf_msdyn_agreementinvoicesetupid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  organizationid_guid: string | null;
  processid_guid: string | null;
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_RelatedOne {
  activestageid: WebMappingRetrieve<ProcessStage_Select,ProcessStage_Expand,ProcessStage_Filter,ProcessStage_Fixed,ProcessStage_Result,ProcessStage_FormattedResult>;
  bpf_msdyn_agreementbookingsetupid: WebMappingRetrieve<msdyn_agreementbookingsetup_Select,msdyn_agreementbookingsetup_Expand,msdyn_agreementbookingsetup_Filter,msdyn_agreementbookingsetup_Fixed,msdyn_agreementbookingsetup_Result,msdyn_agreementbookingsetup_FormattedResult>;
  bpf_msdyn_agreementid: WebMappingRetrieve<msdyn_agreement_Select,msdyn_agreement_Expand,msdyn_agreement_Filter,msdyn_agreement_Fixed,msdyn_agreement_Result,msdyn_agreement_FormattedResult>;
  bpf_msdyn_agreementinvoicesetupid: WebMappingRetrieve<msdyn_agreementinvoicesetup_Select,msdyn_agreementinvoicesetup_Expand,msdyn_agreementinvoicesetup_Filter,msdyn_agreementinvoicesetup_Fixed,msdyn_agreementinvoicesetup_Result,msdyn_agreementinvoicesetup_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
  processid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_RelatedMany {
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_ProcessSession: WebMappingRetrieve<ProcessSession_Select,ProcessSession_Expand,ProcessSession_Filter,ProcessSession_Fixed,ProcessSession_Result,ProcessSession_FormattedResult>;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_WorkflowLogs: WebMappingRetrieve<WorkflowLog_Select,WorkflowLog_Expand,WorkflowLog_Filter,WorkflowLog_Fixed,WorkflowLog_Result,WorkflowLog_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3s: WebMappingRetrieve<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Expand,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Filter,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Fixed,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Result,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3s: WebMappingRelated<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_RelatedOne,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3s: WebMappingCUDA<msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Create,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Update,msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_Select>;
}
