interface SLAItem_Base extends WebEntity {
  actionflowuniquename?: string | null;
  actionurl?: string | null;
  allowpauseresume?: boolean | null;
  applicableentity?: string | null;
  applicablewhenxml?: string | null;
  changedattributelist?: string | null;
  componentstate?: componentstate | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  failureafter?: number | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  msdyn_advancedpauseconfiguration?: boolean | null;
  msdyn_pauseconfigurationxml?: string | null;
  name?: string | null;
  overwritetime?: Date | null;
  relatedfield?: string | null;
  sequencenumber?: number | null;
  slaitemid?: string | null;
  slaitemidunique?: string | null;
  solutionid?: string | null;
  successconditionsxml?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
  warnafter?: number | null;
}
interface SLAItem_Relationships {
  SLAItem_SyncErrors?: SyncError_Result[] | null;
  msdyn_SLAKPIID?: msdyn_slakpi_Result | null;
  msdyn_migrationtracker_LegacySLAItem_slaitem?: msdyn_migrationtracker_Result[] | null;
  msdyn_migrationtracker_ModernSLAItem_slaitem?: msdyn_migrationtracker_Result[] | null;
  msdyn_slaitem_slakpiinstance?: SLAKPIInstance_Result[] | null;
}
interface SLAItem extends SLAItem_Base, SLAItem_Relationships {
  businesshoursid_bind$calendars?: string | null;
  slaid_bind$slas?: string | null;
  workflowid_bind$workflows?: string | null;
}
interface SLAItem_Create extends SLAItem {
  msdyn_SLAKPIID_bind$msdyn_slakpis?: string | null;
}
interface SLAItem_Update extends SLAItem {
}
interface SLAItem_Select {
  actionflowuniquename: WebAttribute<SLAItem_Select, { actionflowuniquename: string | null }, {  }>;
  actionurl: WebAttribute<SLAItem_Select, { actionurl: string | null }, {  }>;
  allowpauseresume: WebAttribute<SLAItem_Select, { allowpauseresume: boolean | null }, {  }>;
  applicableentity: WebAttribute<SLAItem_Select, { applicableentity: string | null }, {  }>;
  applicablewhenxml: WebAttribute<SLAItem_Select, { applicablewhenxml: string | null }, {  }>;
  businesshoursid_guid: WebAttribute<SLAItem_Select, { businesshoursid_guid: string | null }, { businesshoursid_formatted?: string }>;
  changedattributelist: WebAttribute<SLAItem_Select, { changedattributelist: string | null }, {  }>;
  componentstate: WebAttribute<SLAItem_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createdby_guid: WebAttribute<SLAItem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<SLAItem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<SLAItem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<SLAItem_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<SLAItem_Select, { exchangerate: number | null }, {  }>;
  failureafter: WebAttribute<SLAItem_Select, { failureafter: number | null }, {  }>;
  ismanaged: WebAttribute<SLAItem_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<SLAItem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<SLAItem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<SLAItem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_advancedpauseconfiguration: WebAttribute<SLAItem_Select, { msdyn_advancedpauseconfiguration: boolean | null }, {  }>;
  msdyn_pauseconfigurationxml: WebAttribute<SLAItem_Select, { msdyn_pauseconfigurationxml: string | null }, {  }>;
  msdyn_slakpiid_guid: WebAttribute<SLAItem_Select, { msdyn_slakpiid_guid: string | null }, { msdyn_slakpiid_formatted?: string }>;
  name: WebAttribute<SLAItem_Select, { name: string | null }, {  }>;
  overwritetime: WebAttribute<SLAItem_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<SLAItem_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<SLAItem_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owninguser_guid: WebAttribute<SLAItem_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  relatedfield: WebAttribute<SLAItem_Select, { relatedfield: string | null }, {  }>;
  sequencenumber: WebAttribute<SLAItem_Select, { sequencenumber: number | null }, {  }>;
  slaid_guid: WebAttribute<SLAItem_Select, { slaid_guid: string | null }, { slaid_formatted?: string }>;
  slaitemid: WebAttribute<SLAItem_Select, { slaitemid: string | null }, {  }>;
  slaitemidunique: WebAttribute<SLAItem_Select, { slaitemidunique: string | null }, {  }>;
  solutionid: WebAttribute<SLAItem_Select, { solutionid: string | null }, {  }>;
  successconditionsxml: WebAttribute<SLAItem_Select, { successconditionsxml: string | null }, {  }>;
  supportingsolutionid: WebAttribute<SLAItem_Select, { supportingsolutionid: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<SLAItem_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<SLAItem_Select, { versionnumber: number | null }, {  }>;
  warnafter: WebAttribute<SLAItem_Select, { warnafter: number | null }, {  }>;
  workflowid_guid: WebAttribute<SLAItem_Select, { workflowid_guid: string | null }, { workflowid_formatted?: string }>;
}
interface SLAItem_Filter {
  actionflowuniquename: string;
  actionurl: string;
  allowpauseresume: boolean;
  applicableentity: string;
  applicablewhenxml: string;
  businesshoursid_guid: XQW.Guid;
  changedattributelist: string;
  componentstate: componentstate;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  failureafter: number;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_advancedpauseconfiguration: boolean;
  msdyn_pauseconfigurationxml: string;
  msdyn_slakpiid_guid: XQW.Guid;
  name: string;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  relatedfield: string;
  sequencenumber: number;
  slaid_guid: XQW.Guid;
  slaitemid: XQW.Guid;
  slaitemidunique: XQW.Guid;
  solutionid: XQW.Guid;
  successconditionsxml: string;
  supportingsolutionid: XQW.Guid;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
  warnafter: number;
  workflowid_guid: XQW.Guid;
}
interface SLAItem_Expand {
  SLAItem_SyncErrors: WebExpand<SLAItem_Expand, SyncError_Select, SyncError_Filter, { SLAItem_SyncErrors: SyncError_Result[] }>;
  businesshoursid: WebExpand<SLAItem_Expand, Calendar_Select, Calendar_Filter, { businesshoursid: Calendar_Result }>;
  createdby: WebExpand<SLAItem_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<SLAItem_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  modifiedby: WebExpand<SLAItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  modifiedonbehalfby: WebExpand<SLAItem_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfby: SystemUser_Result }>;
  msdyn_SLAKPIID: WebExpand<SLAItem_Expand, msdyn_slakpi_Select, msdyn_slakpi_Filter, { msdyn_SLAKPIID: msdyn_slakpi_Result }>;
  msdyn_migrationtracker_LegacySLAItem_slaitem: WebExpand<SLAItem_Expand, msdyn_migrationtracker_Select, msdyn_migrationtracker_Filter, { msdyn_migrationtracker_LegacySLAItem_slaitem: msdyn_migrationtracker_Result[] }>;
  msdyn_migrationtracker_ModernSLAItem_slaitem: WebExpand<SLAItem_Expand, msdyn_migrationtracker_Select, msdyn_migrationtracker_Filter, { msdyn_migrationtracker_ModernSLAItem_slaitem: msdyn_migrationtracker_Result[] }>;
  msdyn_slaitem_slakpiinstance: WebExpand<SLAItem_Expand, SLAKPIInstance_Select, SLAKPIInstance_Filter, { msdyn_slaitem_slakpiinstance: SLAKPIInstance_Result[] }>;
  slaid: WebExpand<SLAItem_Expand, SLA_Select, SLA_Filter, { slaid: SLA_Result }>;
  transactioncurrencyid: WebExpand<SLAItem_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
  workflowid: WebExpand<SLAItem_Expand, Workflow_Select, Workflow_Filter, { workflowid: Workflow_Result }>;
}
interface SLAItem_FormattedResult {
  businesshoursid_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_slakpiid_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owninguser_formatted?: string;
  slaid_formatted?: string;
  transactioncurrencyid_formatted?: string;
  workflowid_formatted?: string;
}
interface SLAItem_Result extends SLAItem_Base, SLAItem_Relationships {
  "@odata.etag": string;
  businesshoursid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_slakpiid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owninguser_guid: string | null;
  slaid_guid: string | null;
  transactioncurrencyid_guid: string | null;
  workflowid_guid: string | null;
}
interface SLAItem_RelatedOne {
  businesshoursid: WebMappingRetrieve<Calendar_Select,Calendar_Expand,Calendar_Filter,Calendar_Fixed,Calendar_Result,Calendar_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_SLAKPIID: WebMappingRetrieve<msdyn_slakpi_Select,msdyn_slakpi_Expand,msdyn_slakpi_Filter,msdyn_slakpi_Fixed,msdyn_slakpi_Result,msdyn_slakpi_FormattedResult>;
  slaid: WebMappingRetrieve<SLA_Select,SLA_Expand,SLA_Filter,SLA_Fixed,SLA_Result,SLA_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  workflowid: WebMappingRetrieve<Workflow_Select,Workflow_Expand,Workflow_Filter,Workflow_Fixed,Workflow_Result,Workflow_FormattedResult>;
}
interface SLAItem_RelatedMany {
  SLAItem_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  msdyn_migrationtracker_LegacySLAItem_slaitem: WebMappingRetrieve<msdyn_migrationtracker_Select,msdyn_migrationtracker_Expand,msdyn_migrationtracker_Filter,msdyn_migrationtracker_Fixed,msdyn_migrationtracker_Result,msdyn_migrationtracker_FormattedResult>;
  msdyn_migrationtracker_ModernSLAItem_slaitem: WebMappingRetrieve<msdyn_migrationtracker_Select,msdyn_migrationtracker_Expand,msdyn_migrationtracker_Filter,msdyn_migrationtracker_Fixed,msdyn_migrationtracker_Result,msdyn_migrationtracker_FormattedResult>;
  msdyn_slaitem_slakpiinstance: WebMappingRetrieve<SLAKPIInstance_Select,SLAKPIInstance_Expand,SLAKPIInstance_Filter,SLAKPIInstance_Fixed,SLAKPIInstance_Result,SLAKPIInstance_FormattedResult>;
}
interface WebEntitiesRetrieve {
  slaitems: WebMappingRetrieve<SLAItem_Select,SLAItem_Expand,SLAItem_Filter,SLAItem_Fixed,SLAItem_Result,SLAItem_FormattedResult>;
}
interface WebEntitiesRelated {
  slaitems: WebMappingRelated<SLAItem_RelatedOne,SLAItem_RelatedMany>;
}
interface WebEntitiesCUDA {
  slaitems: WebMappingCUDA<SLAItem_Create,SLAItem_Update,SLAItem_Select>;
}
