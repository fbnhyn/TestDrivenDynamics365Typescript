interface ChannelAccessProfileRuleItem_Base extends WebEntity {
  channelaccessprofileruleitemid?: string | null;
  channelaccessprofileruleitemidunique?: string | null;
  componentstate?: componentstate | null;
  conditionxml?: string | null;
  createdon?: Date | null;
  description?: string | null;
  exchangerate?: number | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  modifiedon?: Date | null;
  name?: string | null;
  overwritetime?: Date | null;
  sequencenumber?: number | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface ChannelAccessProfileRuleItem_Relationships {
  ChannelAccessProfileRuleItem_SyncErrors?: SyncError_Result[] | null;
  TransactionCurrencyId?: TransactionCurrency_Result | null;
  lk_profileruleitemid?: SystemUser_Result | null;
  lk_profileruleitemid1?: SystemUser_Result | null;
  lk_profileruleitemid2?: SystemUser_Result | null;
  lk_profileruleitemid3?: SystemUser_Result | null;
  profileruleid2?: ChannelAccessProfile_Result | null;
  profileruleitem_Annotation?: Annotation_Result[] | null;
}
interface ChannelAccessProfileRuleItem extends ChannelAccessProfileRuleItem_Base, ChannelAccessProfileRuleItem_Relationships {
  TransactionCurrencyId_bind$transactioncurrencies?: string | null;
  channelaccessprofileruleid_bind$channelaccessprofilerules?: string | null;
  profileruleid2_bind$channelaccessprofiles?: string | null;
}
interface ChannelAccessProfileRuleItem_Create extends ChannelAccessProfileRuleItem {
}
interface ChannelAccessProfileRuleItem_Update extends ChannelAccessProfileRuleItem {
}
interface ChannelAccessProfileRuleItem_Select {
  associatedchannelaccessprofile_guid: WebAttribute<ChannelAccessProfileRuleItem_Select, { associatedchannelaccessprofile_guid: string | null }, { associatedchannelaccessprofile_formatted?: string }>;
  channelaccessprofileruleid_guid: WebAttribute<ChannelAccessProfileRuleItem_Select, { channelaccessprofileruleid_guid: string | null }, { channelaccessprofileruleid_formatted?: string }>;
  channelaccessprofileruleitemid: WebAttribute<ChannelAccessProfileRuleItem_Select, { channelaccessprofileruleitemid: string | null }, {  }>;
  channelaccessprofileruleitemidunique: WebAttribute<ChannelAccessProfileRuleItem_Select, { channelaccessprofileruleitemidunique: string | null }, {  }>;
  componentstate: WebAttribute<ChannelAccessProfileRuleItem_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  conditionxml: WebAttribute<ChannelAccessProfileRuleItem_Select, { conditionxml: string | null }, {  }>;
  createdby_guid: WebAttribute<ChannelAccessProfileRuleItem_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<ChannelAccessProfileRuleItem_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<ChannelAccessProfileRuleItem_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  description: WebAttribute<ChannelAccessProfileRuleItem_Select, { description: string | null }, {  }>;
  exchangerate: WebAttribute<ChannelAccessProfileRuleItem_Select, { exchangerate: number | null }, {  }>;
  introducedversion: WebAttribute<ChannelAccessProfileRuleItem_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<ChannelAccessProfileRuleItem_Select, { ismanaged: boolean | null }, {  }>;
  modifiedby_guid: WebAttribute<ChannelAccessProfileRuleItem_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<ChannelAccessProfileRuleItem_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<ChannelAccessProfileRuleItem_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<ChannelAccessProfileRuleItem_Select, { name: string | null }, {  }>;
  overwritetime: WebAttribute<ChannelAccessProfileRuleItem_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  ownerid_guid: WebAttribute<ChannelAccessProfileRuleItem_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<ChannelAccessProfileRuleItem_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owninguser_guid: WebAttribute<ChannelAccessProfileRuleItem_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  sequencenumber: WebAttribute<ChannelAccessProfileRuleItem_Select, { sequencenumber: number | null }, {  }>;
  solutionid: WebAttribute<ChannelAccessProfileRuleItem_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<ChannelAccessProfileRuleItem_Select, { supportingsolutionid: string | null }, {  }>;
  timezoneruleversionnumber: WebAttribute<ChannelAccessProfileRuleItem_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<ChannelAccessProfileRuleItem_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<ChannelAccessProfileRuleItem_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<ChannelAccessProfileRuleItem_Select, { versionnumber: number | null }, {  }>;
}
interface ChannelAccessProfileRuleItem_Filter {
  associatedchannelaccessprofile_guid: XQW.Guid;
  channelaccessprofileruleid_guid: XQW.Guid;
  channelaccessprofileruleitemid: XQW.Guid;
  channelaccessprofileruleitemidunique: XQW.Guid;
  componentstate: componentstate;
  conditionxml: string;
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  description: string;
  exchangerate: any;
  introducedversion: string;
  ismanaged: boolean;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overwritetime: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  sequencenumber: number;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface ChannelAccessProfileRuleItem_Expand {
  ChannelAccessProfileRuleItem_SyncErrors: WebExpand<ChannelAccessProfileRuleItem_Expand, SyncError_Select, SyncError_Filter, { ChannelAccessProfileRuleItem_SyncErrors: SyncError_Result[] }>;
  TransactionCurrencyId: WebExpand<ChannelAccessProfileRuleItem_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { TransactionCurrencyId: TransactionCurrency_Result }>;
  channelaccessprofileruleid: WebExpand<ChannelAccessProfileRuleItem_Expand, ChannelAccessProfileRule_Select, ChannelAccessProfileRule_Filter, { channelaccessprofileruleid: ChannelAccessProfileRule_Result }>;
  lk_profileruleitemid: WebExpand<ChannelAccessProfileRuleItem_Expand, SystemUser_Select, SystemUser_Filter, { lk_profileruleitemid: SystemUser_Result }>;
  lk_profileruleitemid1: WebExpand<ChannelAccessProfileRuleItem_Expand, SystemUser_Select, SystemUser_Filter, { lk_profileruleitemid1: SystemUser_Result }>;
  lk_profileruleitemid2: WebExpand<ChannelAccessProfileRuleItem_Expand, SystemUser_Select, SystemUser_Filter, { lk_profileruleitemid2: SystemUser_Result }>;
  lk_profileruleitemid3: WebExpand<ChannelAccessProfileRuleItem_Expand, SystemUser_Select, SystemUser_Filter, { lk_profileruleitemid3: SystemUser_Result }>;
  profileruleid2: WebExpand<ChannelAccessProfileRuleItem_Expand, ChannelAccessProfile_Select, ChannelAccessProfile_Filter, { profileruleid2: ChannelAccessProfile_Result }>;
  profileruleitem_Annotation: WebExpand<ChannelAccessProfileRuleItem_Expand, Annotation_Select, Annotation_Filter, { profileruleitem_Annotation: Annotation_Result[] }>;
}
interface ChannelAccessProfileRuleItem_FormattedResult {
  associatedchannelaccessprofile_formatted?: string;
  channelaccessprofileruleid_formatted?: string;
  componentstate_formatted?: string;
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overwritetime_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owninguser_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface ChannelAccessProfileRuleItem_Result extends ChannelAccessProfileRuleItem_Base, ChannelAccessProfileRuleItem_Relationships {
  "@odata.etag": string;
  associatedchannelaccessprofile_guid: string | null;
  channelaccessprofileruleid_guid: string | null;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface ChannelAccessProfileRuleItem_RelatedOne {
  TransactionCurrencyId: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
  channelaccessprofileruleid: WebMappingRetrieve<ChannelAccessProfileRule_Select,ChannelAccessProfileRule_Expand,ChannelAccessProfileRule_Filter,ChannelAccessProfileRule_Fixed,ChannelAccessProfileRule_Result,ChannelAccessProfileRule_FormattedResult>;
  lk_profileruleitemid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  lk_profileruleitemid1: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  lk_profileruleitemid2: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  lk_profileruleitemid3: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  profileruleid2: WebMappingRetrieve<ChannelAccessProfile_Select,ChannelAccessProfile_Expand,ChannelAccessProfile_Filter,ChannelAccessProfile_Fixed,ChannelAccessProfile_Result,ChannelAccessProfile_FormattedResult>;
}
interface ChannelAccessProfileRuleItem_RelatedMany {
  ChannelAccessProfileRuleItem_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  profileruleitem_Annotation: WebMappingRetrieve<Annotation_Select,Annotation_Expand,Annotation_Filter,Annotation_Fixed,Annotation_Result,Annotation_FormattedResult>;
}
interface WebEntitiesRetrieve {
  channelaccessprofileruleitems: WebMappingRetrieve<ChannelAccessProfileRuleItem_Select,ChannelAccessProfileRuleItem_Expand,ChannelAccessProfileRuleItem_Filter,ChannelAccessProfileRuleItem_Fixed,ChannelAccessProfileRuleItem_Result,ChannelAccessProfileRuleItem_FormattedResult>;
}
interface WebEntitiesRelated {
  channelaccessprofileruleitems: WebMappingRelated<ChannelAccessProfileRuleItem_RelatedOne,ChannelAccessProfileRuleItem_RelatedMany>;
}
interface WebEntitiesCUDA {
  channelaccessprofileruleitems: WebMappingCUDA<ChannelAccessProfileRuleItem_Create,ChannelAccessProfileRuleItem_Update,ChannelAccessProfileRuleItem_Select>;
}
