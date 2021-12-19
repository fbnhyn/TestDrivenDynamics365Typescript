interface Feedback_Base extends WebEntity {
  closedon?: Date | null;
  comments?: string | null;
  createdon?: Date | null;
  exchangerate?: number | null;
  feedbackid?: string | null;
  importsequencenumber?: number | null;
  maxrating?: number | null;
  minrating?: number | null;
  modifiedon?: Date | null;
  normalizedrating?: number | null;
  overriddencreatedon?: Date | null;
  rating?: number | null;
  source?: feedback_source | null;
  statecode?: feedback_statecode | null;
  statuscode?: feedback_statuscode | null;
  title?: string | null;
  versionnumber?: number | null;
}
interface Feedback_Relationships {
  ContactId?: Contact_Result | null;
  CreatedByContact?: Contact_Result | null;
  CreatedOnBehalfByContact?: Contact_Result | null;
  FeedbackId?: Feedback_Result | null;
  Feedback_SyncErrors?: SyncError_Result[] | null;
  KnowledgeArticleId?: KnowledgeArticle_Result | null;
  ModifiedOnBehalfBy?: SystemUser_Result | null;
  feedback_DuplicateBaseRecord?: DuplicateRecord_Result[] | null;
  feedback_DuplicateMatchingRecord?: DuplicateRecord_Result[] | null;
  feedback_feedback?: Feedback_Result[] | null;
  feedback_principalobjectattributeaccess?: PrincipalObjectAttributeAccess_Result[] | null;
  msdyn_ContextObjectId_incident?: Incident_Result | null;
  msdyn_ContextObjectId_knowledgearticle?: KnowledgeArticle_Result | null;
  regardingobjectid_msdyn_liveconversation?: msdyn_liveconversation_Result | null;
  regardingobjectid_msdyn_ocliveworkitem?: msdyn_ocliveworkitem_Result | null;
  regardingobjectid_msdyn_ocoutboundmessage?: msdyn_ocoutboundmessage_Result | null;
  regardingobjectid_msdyn_ocsession?: msdyn_ocsession_Result | null;
  regardingobjectid_msfp_alert?: msfp_alert_Result | null;
  regardingobjectid_msfp_surveyinvite?: msfp_surveyinvite_Result | null;
  regardingobjectid_msfp_surveyresponse?: msfp_surveyresponse_Result | null;
}
interface Feedback extends Feedback_Base, Feedback_Relationships {
  ContactId_bind$contacts?: string | null;
  CreatedByContact_bind$contacts?: string | null;
  CreatedOnBehalfByContact_bind$contacts?: string | null;
  FeedbackId_bind$feedback?: string | null;
  KnowledgeArticleId_bind$knowledgearticles?: string | null;
  msdyn_ContextObjectId_incident_bind$incidents?: string | null;
  msdyn_ContextObjectId_knowledgearticle_bind$knowledgearticles?: string | null;
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  regardingobjectid_msdyn_liveconversation_bind$msdyn_liveconversations?: string | null;
  regardingobjectid_msdyn_ocliveworkitem_bind$msdyn_ocliveworkitems?: string | null;
  regardingobjectid_msdyn_ocoutboundmessage_bind$msdyn_ocoutboundmessages?: string | null;
  regardingobjectid_msdyn_ocsession_bind$msdyn_ocsessions?: string | null;
  regardingobjectid_msfp_alert_bind$msfp_alerts?: string | null;
  regardingobjectid_msfp_surveyinvite_bind$msfp_surveyinvites?: string | null;
  regardingobjectid_msfp_surveyresponse_bind$msfp_surveyresponses?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface Feedback_Create extends Feedback {
}
interface Feedback_Update extends Feedback {
}
interface Feedback_Select {
  closedby_guid: WebAttribute<Feedback_Select, { closedby_guid: string | null }, { closedby_formatted?: string }>;
  closedon: WebAttribute<Feedback_Select, { closedon: Date | null }, { closedon_formatted?: string }>;
  comments: WebAttribute<Feedback_Select, { comments: string | null }, {  }>;
  createdby_guid: WebAttribute<Feedback_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdbycontact_guid: WebAttribute<Feedback_Select, { createdbycontact_guid: string | null }, { createdbycontact_formatted?: string }>;
  createdon: WebAttribute<Feedback_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<Feedback_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  createdonbehalfbycontact_guid: WebAttribute<Feedback_Select, { createdonbehalfbycontact_guid: string | null }, { createdonbehalfbycontact_formatted?: string }>;
  exchangerate: WebAttribute<Feedback_Select, { exchangerate: number | null }, {  }>;
  feedbackid: WebAttribute<Feedback_Select, { feedbackid: string | null }, {  }>;
  importsequencenumber: WebAttribute<Feedback_Select, { importsequencenumber: number | null }, {  }>;
  maxrating: WebAttribute<Feedback_Select, { maxrating: number | null }, {  }>;
  minrating: WebAttribute<Feedback_Select, { minrating: number | null }, {  }>;
  modifiedby_guid: WebAttribute<Feedback_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<Feedback_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<Feedback_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  msdyn_contextobjectid_guid: WebAttribute<Feedback_Select, { msdyn_contextobjectid_guid: string | null }, { msdyn_contextobjectid_formatted?: string }>;
  normalizedrating: WebAttribute<Feedback_Select, { normalizedrating: number | null }, {  }>;
  overriddencreatedon: WebAttribute<Feedback_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<Feedback_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<Feedback_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<Feedback_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<Feedback_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  rating: WebAttribute<Feedback_Select, { rating: number | null }, {  }>;
  regardingobjectid_guid: WebAttribute<Feedback_Select, { regardingobjectid_guid: string | null }, { regardingobjectid_formatted?: string }>;
  source: WebAttribute<Feedback_Select, { source: feedback_source | null }, { source_formatted?: string }>;
  statecode: WebAttribute<Feedback_Select, { statecode: feedback_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<Feedback_Select, { statuscode: feedback_statuscode | null }, { statuscode_formatted?: string }>;
  title: WebAttribute<Feedback_Select, { title: string | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<Feedback_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  versionnumber: WebAttribute<Feedback_Select, { versionnumber: number | null }, {  }>;
}
interface Feedback_Filter {
  closedby_guid: XQW.Guid;
  closedon: Date;
  comments: string;
  createdby_guid: XQW.Guid;
  createdbycontact_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  createdonbehalfbycontact_guid: XQW.Guid;
  exchangerate: any;
  feedbackid: XQW.Guid;
  importsequencenumber: number;
  maxrating: number;
  minrating: number;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  msdyn_contextobjectid_guid: XQW.Guid;
  normalizedrating: any;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  rating: number;
  regardingobjectid_guid: XQW.Guid;
  source: feedback_source;
  statecode: feedback_statecode;
  statuscode: feedback_statuscode;
  title: string;
  transactioncurrencyid_guid: XQW.Guid;
  versionnumber: number;
}
interface Feedback_Expand {
  ContactId: WebExpand<Feedback_Expand, Contact_Select, Contact_Filter, { ContactId: Contact_Result }>;
  CreatedByContact: WebExpand<Feedback_Expand, Contact_Select, Contact_Filter, { CreatedByContact: Contact_Result }>;
  CreatedOnBehalfByContact: WebExpand<Feedback_Expand, Contact_Select, Contact_Filter, { CreatedOnBehalfByContact: Contact_Result }>;
  FeedbackId: WebExpand<Feedback_Expand, Feedback_Select, Feedback_Filter, { FeedbackId: Feedback_Result }>;
  Feedback_SyncErrors: WebExpand<Feedback_Expand, SyncError_Select, SyncError_Filter, { Feedback_SyncErrors: SyncError_Result[] }>;
  KnowledgeArticleId: WebExpand<Feedback_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { KnowledgeArticleId: KnowledgeArticle_Result }>;
  ModifiedOnBehalfBy: WebExpand<Feedback_Expand, SystemUser_Select, SystemUser_Filter, { ModifiedOnBehalfBy: SystemUser_Result }>;
  closedby: WebExpand<Feedback_Expand, SystemUser_Select, SystemUser_Filter, { closedby: SystemUser_Result }>;
  createdby: WebExpand<Feedback_Expand, SystemUser_Select, SystemUser_Filter, { createdby: SystemUser_Result }>;
  createdonbehalfby: WebExpand<Feedback_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfby: SystemUser_Result }>;
  feedback_DuplicateBaseRecord: WebExpand<Feedback_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { feedback_DuplicateBaseRecord: DuplicateRecord_Result[] }>;
  feedback_DuplicateMatchingRecord: WebExpand<Feedback_Expand, DuplicateRecord_Select, DuplicateRecord_Filter, { feedback_DuplicateMatchingRecord: DuplicateRecord_Result[] }>;
  feedback_feedback: WebExpand<Feedback_Expand, Feedback_Select, Feedback_Filter, { feedback_feedback: Feedback_Result[] }>;
  feedback_principalobjectattributeaccess: WebExpand<Feedback_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { feedback_principalobjectattributeaccess: PrincipalObjectAttributeAccess_Result[] }>;
  modifiedby: WebExpand<Feedback_Expand, SystemUser_Select, SystemUser_Filter, { modifiedby: SystemUser_Result }>;
  msdyn_ContextObjectId_incident: WebExpand<Feedback_Expand, Incident_Select, Incident_Filter, { msdyn_ContextObjectId_incident: Incident_Result }>;
  msdyn_ContextObjectId_knowledgearticle: WebExpand<Feedback_Expand, KnowledgeArticle_Select, KnowledgeArticle_Filter, { msdyn_ContextObjectId_knowledgearticle: KnowledgeArticle_Result }>;
  ownerid: WebExpand<Feedback_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<Feedback_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  regardingobjectid_msdyn_liveconversation: WebExpand<Feedback_Expand, msdyn_liveconversation_Select, msdyn_liveconversation_Filter, { regardingobjectid_msdyn_liveconversation: msdyn_liveconversation_Result }>;
  regardingobjectid_msdyn_ocliveworkitem: WebExpand<Feedback_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { regardingobjectid_msdyn_ocliveworkitem: msdyn_ocliveworkitem_Result }>;
  regardingobjectid_msdyn_ocoutboundmessage: WebExpand<Feedback_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { regardingobjectid_msdyn_ocoutboundmessage: msdyn_ocoutboundmessage_Result }>;
  regardingobjectid_msdyn_ocsession: WebExpand<Feedback_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { regardingobjectid_msdyn_ocsession: msdyn_ocsession_Result }>;
  regardingobjectid_msfp_alert: WebExpand<Feedback_Expand, msfp_alert_Select, msfp_alert_Filter, { regardingobjectid_msfp_alert: msfp_alert_Result }>;
  regardingobjectid_msfp_surveyinvite: WebExpand<Feedback_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { regardingobjectid_msfp_surveyinvite: msfp_surveyinvite_Result }>;
  regardingobjectid_msfp_surveyresponse: WebExpand<Feedback_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { regardingobjectid_msfp_surveyresponse: msfp_surveyresponse_Result }>;
  transactioncurrencyid: WebExpand<Feedback_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface Feedback_FormattedResult {
  closedby_formatted?: string;
  closedon_formatted?: string;
  createdby_formatted?: string;
  createdbycontact_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  createdonbehalfbycontact_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  msdyn_contextobjectid_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  regardingobjectid_formatted?: string;
  source_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface Feedback_Result extends Feedback_Base, Feedback_Relationships {
  "@odata.etag": string;
  closedby_guid: string | null;
  createdby_guid: string | null;
  createdbycontact_guid: string | null;
  createdonbehalfby_guid: string | null;
  createdonbehalfbycontact_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  msdyn_contextobjectid_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  regardingobjectid_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface Feedback_RelatedOne {
  ContactId: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  CreatedByContact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  CreatedOnBehalfByContact: WebMappingRetrieve<Contact_Select,Contact_Expand,Contact_Filter,Contact_Fixed,Contact_Result,Contact_FormattedResult>;
  FeedbackId: WebMappingRetrieve<Feedback_Select,Feedback_Expand,Feedback_Filter,Feedback_Fixed,Feedback_Result,Feedback_FormattedResult>;
  KnowledgeArticleId: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  ModifiedOnBehalfBy: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  closedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedby: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  msdyn_ContextObjectId_incident: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  msdyn_ContextObjectId_knowledgearticle: WebMappingRetrieve<KnowledgeArticle_Select,KnowledgeArticle_Expand,KnowledgeArticle_Filter,KnowledgeArticle_Fixed,KnowledgeArticle_Result,KnowledgeArticle_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  regardingobjectid_msdyn_liveconversation: WebMappingRetrieve<msdyn_liveconversation_Select,msdyn_liveconversation_Expand,msdyn_liveconversation_Filter,msdyn_liveconversation_Fixed,msdyn_liveconversation_Result,msdyn_liveconversation_FormattedResult>;
  regardingobjectid_msdyn_ocliveworkitem: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  regardingobjectid_msdyn_ocoutboundmessage: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  regardingobjectid_msdyn_ocsession: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  regardingobjectid_msfp_alert: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  regardingobjectid_msfp_surveyinvite: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  regardingobjectid_msfp_surveyresponse: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface Feedback_RelatedMany {
  Feedback_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  feedback_DuplicateBaseRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  feedback_DuplicateMatchingRecord: WebMappingRetrieve<DuplicateRecord_Select,DuplicateRecord_Expand,DuplicateRecord_Filter,DuplicateRecord_Fixed,DuplicateRecord_Result,DuplicateRecord_FormattedResult>;
  feedback_feedback: WebMappingRetrieve<Feedback_Select,Feedback_Expand,Feedback_Filter,Feedback_Fixed,Feedback_Result,Feedback_FormattedResult>;
  feedback_principalobjectattributeaccess: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
}
interface WebEntitiesRetrieve {
  feedback: WebMappingRetrieve<Feedback_Select,Feedback_Expand,Feedback_Filter,Feedback_Fixed,Feedback_Result,Feedback_FormattedResult>;
}
interface WebEntitiesRelated {
  feedback: WebMappingRelated<Feedback_RelatedOne,Feedback_RelatedMany>;
}
interface WebEntitiesCUDA {
  feedback: WebMappingCUDA<Feedback_Create,Feedback_Update,Feedback_Select>;
}
