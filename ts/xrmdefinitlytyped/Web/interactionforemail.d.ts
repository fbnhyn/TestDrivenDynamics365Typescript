interface InteractionForEmail_Base extends WebEntity {
  createdon?: Date | null;
  emailactivityid?: string | null;
  emailaddress?: string | null;
  emailinteractionreplyid?: string | null;
  emailinteractiontime?: Date | null;
  exchangerate?: number | null;
  importsequencenumber?: number | null;
  interactedcomponenttext?: string | null;
  interactionforemailid?: string | null;
  interactionlocation?: string | null;
  interactionpartyid?: string | null;
  interactionpartytypecode?: number | null;
  interactionrepliedby?: string | null;
  interactionreplyid?: string | null;
  interactiontype?: interaction_type | null;
  interactionuseragent?: string | null;
  modifiedon?: Date | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  statecode?: interactionforemail_statecode | null;
  statuscode?: interactionforemail_statuscode | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface InteractionForEmail_Relationships {
  createdbyname?: SystemUser_Result | null;
  createdonbehalfbyname?: SystemUser_Result | null;
  interactionforemail_BulkOperations?: BulkOperation_Result[] | null;
  interactionforemail_CampaignResponses?: CampaignResponse_Result[] | null;
  interactionforemail_IncidentResolutions?: IncidentResolution_Result[] | null;
  interactionforemail_OpportunityCloses?: OpportunityClose_Result[] | null;
  interactionforemail_OrderCloses?: OrderClose_Result[] | null;
  interactionforemail_QuoteCloses?: QuoteClose_Result[] | null;
  interactionforemail_ServiceAppointments?: ServiceAppointment_Result[] | null;
  interactionforemail_msdyn_approvals?: msdyn_approval_Result[] | null;
  interactionforemail_msdyn_bookingalerts?: msdyn_bookingalert_Result[] | null;
  interactionforemail_msdyn_ocliveworkitems?: msdyn_ocliveworkitem_Result[] | null;
  interactionforemail_msdyn_ocoutboundmessages?: msdyn_ocoutboundmessage_Result[] | null;
  interactionforemail_msdyn_ocsessions?: msdyn_ocsession_Result[] | null;
  interactionforemail_msfp_alerts?: msfp_alert_Result[] | null;
  interactionforemail_msfp_surveyinvites?: msfp_surveyinvite_Result[] | null;
  interactionforemail_msfp_surveyresponses?: msfp_surveyresponse_Result[] | null;
  modifiedbyname?: SystemUser_Result | null;
  modifiedonbehalfbyname?: SystemUser_Result | null;
  new_interactionforemail_ActivityPointers?: ActivityPointer_Result[] | null;
  new_interactionforemail_AsyncOperations?: AsyncOperation_Result[] | null;
}
interface InteractionForEmail extends InteractionForEmail_Base, InteractionForEmail_Relationships {
  ownerid_bind$systemusers?: string | null;
  ownerid_bind$teams?: string | null;
  transactioncurrencyid_bind$transactioncurrencies?: string | null;
}
interface InteractionForEmail_Create extends InteractionForEmail {
}
interface InteractionForEmail_Update extends InteractionForEmail {
}
interface InteractionForEmail_Select {
  createdby_guid: WebAttribute<InteractionForEmail_Select, { createdby_guid: string | null }, { createdby_formatted?: string }>;
  createdon: WebAttribute<InteractionForEmail_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  createdonbehalfby_guid: WebAttribute<InteractionForEmail_Select, { createdonbehalfby_guid: string | null }, { createdonbehalfby_formatted?: string }>;
  emailactivityid: WebAttribute<InteractionForEmail_Select, { emailactivityid: string | null }, {  }>;
  emailaddress: WebAttribute<InteractionForEmail_Select, { emailaddress: string | null }, {  }>;
  emailinteractionreplyid: WebAttribute<InteractionForEmail_Select, { emailinteractionreplyid: string | null }, {  }>;
  emailinteractiontime: WebAttribute<InteractionForEmail_Select, { emailinteractiontime: Date | null }, { emailinteractiontime_formatted?: string }>;
  exchangerate: WebAttribute<InteractionForEmail_Select, { exchangerate: number | null }, {  }>;
  importsequencenumber: WebAttribute<InteractionForEmail_Select, { importsequencenumber: number | null }, {  }>;
  interactedcomponenttext: WebAttribute<InteractionForEmail_Select, { interactedcomponenttext: string | null }, {  }>;
  interactionforemailid: WebAttribute<InteractionForEmail_Select, { interactionforemailid: string | null }, {  }>;
  interactionlocation: WebAttribute<InteractionForEmail_Select, { interactionlocation: string | null }, {  }>;
  interactionpartyid: WebAttribute<InteractionForEmail_Select, { interactionpartyid: string | null }, {  }>;
  interactionpartytypecode: WebAttribute<InteractionForEmail_Select, { interactionpartytypecode: number | null }, {  }>;
  interactionrepliedby: WebAttribute<InteractionForEmail_Select, { interactionrepliedby: string | null }, {  }>;
  interactionreplyid: WebAttribute<InteractionForEmail_Select, { interactionreplyid: string | null }, {  }>;
  interactiontype: WebAttribute<InteractionForEmail_Select, { interactiontype: interaction_type | null }, { interactiontype_formatted?: string }>;
  interactionuseragent: WebAttribute<InteractionForEmail_Select, { interactionuseragent: string | null }, {  }>;
  modifiedby_guid: WebAttribute<InteractionForEmail_Select, { modifiedby_guid: string | null }, { modifiedby_formatted?: string }>;
  modifiedon: WebAttribute<InteractionForEmail_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  modifiedonbehalfby_guid: WebAttribute<InteractionForEmail_Select, { modifiedonbehalfby_guid: string | null }, { modifiedonbehalfby_formatted?: string }>;
  name: WebAttribute<InteractionForEmail_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<InteractionForEmail_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  ownerid_guid: WebAttribute<InteractionForEmail_Select, { ownerid_guid: string | null }, { ownerid_formatted?: string }>;
  owningbusinessunit_guid: WebAttribute<InteractionForEmail_Select, { owningbusinessunit_guid: string | null }, { owningbusinessunit_formatted?: string }>;
  owningteam_guid: WebAttribute<InteractionForEmail_Select, { owningteam_guid: string | null }, { owningteam_formatted?: string }>;
  owninguser_guid: WebAttribute<InteractionForEmail_Select, { owninguser_guid: string | null }, { owninguser_formatted?: string }>;
  statecode: WebAttribute<InteractionForEmail_Select, { statecode: interactionforemail_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<InteractionForEmail_Select, { statuscode: interactionforemail_statuscode | null }, { statuscode_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<InteractionForEmail_Select, { timezoneruleversionnumber: number | null }, {  }>;
  transactioncurrencyid_guid: WebAttribute<InteractionForEmail_Select, { transactioncurrencyid_guid: string | null }, { transactioncurrencyid_formatted?: string }>;
  utcconversiontimezonecode: WebAttribute<InteractionForEmail_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<InteractionForEmail_Select, { versionnumber: number | null }, {  }>;
}
interface InteractionForEmail_Filter {
  createdby_guid: XQW.Guid;
  createdon: Date;
  createdonbehalfby_guid: XQW.Guid;
  emailactivityid: XQW.Guid;
  emailaddress: string;
  emailinteractionreplyid: XQW.Guid;
  emailinteractiontime: Date;
  exchangerate: any;
  importsequencenumber: number;
  interactedcomponenttext: string;
  interactionforemailid: XQW.Guid;
  interactionlocation: string;
  interactionpartyid: XQW.Guid;
  interactionpartytypecode: number;
  interactionrepliedby: string;
  interactionreplyid: string;
  interactiontype: interaction_type;
  interactionuseragent: string;
  modifiedby_guid: XQW.Guid;
  modifiedon: Date;
  modifiedonbehalfby_guid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  ownerid_guid: XQW.Guid;
  owningbusinessunit_guid: XQW.Guid;
  owningteam_guid: XQW.Guid;
  owninguser_guid: XQW.Guid;
  statecode: interactionforemail_statecode;
  statuscode: interactionforemail_statuscode;
  timezoneruleversionnumber: number;
  transactioncurrencyid_guid: XQW.Guid;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface InteractionForEmail_Expand {
  createdbyname: WebExpand<InteractionForEmail_Expand, SystemUser_Select, SystemUser_Filter, { createdbyname: SystemUser_Result }>;
  createdonbehalfbyname: WebExpand<InteractionForEmail_Expand, SystemUser_Select, SystemUser_Filter, { createdonbehalfbyname: SystemUser_Result }>;
  interactionforemail_BulkOperations: WebExpand<InteractionForEmail_Expand, BulkOperation_Select, BulkOperation_Filter, { interactionforemail_BulkOperations: BulkOperation_Result[] }>;
  interactionforemail_CampaignResponses: WebExpand<InteractionForEmail_Expand, CampaignResponse_Select, CampaignResponse_Filter, { interactionforemail_CampaignResponses: CampaignResponse_Result[] }>;
  interactionforemail_IncidentResolutions: WebExpand<InteractionForEmail_Expand, IncidentResolution_Select, IncidentResolution_Filter, { interactionforemail_IncidentResolutions: IncidentResolution_Result[] }>;
  interactionforemail_OpportunityCloses: WebExpand<InteractionForEmail_Expand, OpportunityClose_Select, OpportunityClose_Filter, { interactionforemail_OpportunityCloses: OpportunityClose_Result[] }>;
  interactionforemail_OrderCloses: WebExpand<InteractionForEmail_Expand, OrderClose_Select, OrderClose_Filter, { interactionforemail_OrderCloses: OrderClose_Result[] }>;
  interactionforemail_QuoteCloses: WebExpand<InteractionForEmail_Expand, QuoteClose_Select, QuoteClose_Filter, { interactionforemail_QuoteCloses: QuoteClose_Result[] }>;
  interactionforemail_ServiceAppointments: WebExpand<InteractionForEmail_Expand, ServiceAppointment_Select, ServiceAppointment_Filter, { interactionforemail_ServiceAppointments: ServiceAppointment_Result[] }>;
  interactionforemail_msdyn_approvals: WebExpand<InteractionForEmail_Expand, msdyn_approval_Select, msdyn_approval_Filter, { interactionforemail_msdyn_approvals: msdyn_approval_Result[] }>;
  interactionforemail_msdyn_bookingalerts: WebExpand<InteractionForEmail_Expand, msdyn_bookingalert_Select, msdyn_bookingalert_Filter, { interactionforemail_msdyn_bookingalerts: msdyn_bookingalert_Result[] }>;
  interactionforemail_msdyn_ocliveworkitems: WebExpand<InteractionForEmail_Expand, msdyn_ocliveworkitem_Select, msdyn_ocliveworkitem_Filter, { interactionforemail_msdyn_ocliveworkitems: msdyn_ocliveworkitem_Result[] }>;
  interactionforemail_msdyn_ocoutboundmessages: WebExpand<InteractionForEmail_Expand, msdyn_ocoutboundmessage_Select, msdyn_ocoutboundmessage_Filter, { interactionforemail_msdyn_ocoutboundmessages: msdyn_ocoutboundmessage_Result[] }>;
  interactionforemail_msdyn_ocsessions: WebExpand<InteractionForEmail_Expand, msdyn_ocsession_Select, msdyn_ocsession_Filter, { interactionforemail_msdyn_ocsessions: msdyn_ocsession_Result[] }>;
  interactionforemail_msfp_alerts: WebExpand<InteractionForEmail_Expand, msfp_alert_Select, msfp_alert_Filter, { interactionforemail_msfp_alerts: msfp_alert_Result[] }>;
  interactionforemail_msfp_surveyinvites: WebExpand<InteractionForEmail_Expand, msfp_surveyinvite_Select, msfp_surveyinvite_Filter, { interactionforemail_msfp_surveyinvites: msfp_surveyinvite_Result[] }>;
  interactionforemail_msfp_surveyresponses: WebExpand<InteractionForEmail_Expand, msfp_surveyresponse_Select, msfp_surveyresponse_Filter, { interactionforemail_msfp_surveyresponses: msfp_surveyresponse_Result[] }>;
  modifiedbyname: WebExpand<InteractionForEmail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedbyname: SystemUser_Result }>;
  modifiedonbehalfbyname: WebExpand<InteractionForEmail_Expand, SystemUser_Select, SystemUser_Filter, { modifiedonbehalfbyname: SystemUser_Result }>;
  new_interactionforemail_ActivityPointers: WebExpand<InteractionForEmail_Expand, ActivityPointer_Select, ActivityPointer_Filter, { new_interactionforemail_ActivityPointers: ActivityPointer_Result[] }>;
  new_interactionforemail_AsyncOperations: WebExpand<InteractionForEmail_Expand, AsyncOperation_Select, AsyncOperation_Filter, { new_interactionforemail_AsyncOperations: AsyncOperation_Result[] }>;
  ownerid: WebExpand<InteractionForEmail_Expand, SystemUser_Select & Team_Select, SystemUser_Filter & Team_Filter, { ownerid: SystemUser_Result } & { ownerid: Team_Result }>;
  owningbusinessunit: WebExpand<InteractionForEmail_Expand, BusinessUnit_Select, BusinessUnit_Filter, { owningbusinessunit: BusinessUnit_Result }>;
  owningteam: WebExpand<InteractionForEmail_Expand, Team_Select, Team_Filter, { owningteam: Team_Result }>;
  owninguser: WebExpand<InteractionForEmail_Expand, SystemUser_Select, SystemUser_Filter, { owninguser: SystemUser_Result }>;
  transactioncurrencyid: WebExpand<InteractionForEmail_Expand, TransactionCurrency_Select, TransactionCurrency_Filter, { transactioncurrencyid: TransactionCurrency_Result }>;
}
interface InteractionForEmail_FormattedResult {
  createdby_formatted?: string;
  createdon_formatted?: string;
  createdonbehalfby_formatted?: string;
  emailinteractiontime_formatted?: string;
  interactiontype_formatted?: string;
  modifiedby_formatted?: string;
  modifiedon_formatted?: string;
  modifiedonbehalfby_formatted?: string;
  overriddencreatedon_formatted?: string;
  ownerid_formatted?: string;
  owningbusinessunit_formatted?: string;
  owningteam_formatted?: string;
  owninguser_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
  transactioncurrencyid_formatted?: string;
}
interface InteractionForEmail_Result extends InteractionForEmail_Base, InteractionForEmail_Relationships {
  "@odata.etag": string;
  createdby_guid: string | null;
  createdonbehalfby_guid: string | null;
  modifiedby_guid: string | null;
  modifiedonbehalfby_guid: string | null;
  ownerid_guid: string | null;
  owningbusinessunit_guid: string | null;
  owningteam_guid: string | null;
  owninguser_guid: string | null;
  transactioncurrencyid_guid: string | null;
}
interface InteractionForEmail_RelatedOne {
  createdbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  createdonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  modifiedonbehalfbyname: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  ownerid: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult> & WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owningbusinessunit: WebMappingRetrieve<BusinessUnit_Select,BusinessUnit_Expand,BusinessUnit_Filter,BusinessUnit_Fixed,BusinessUnit_Result,BusinessUnit_FormattedResult>;
  owningteam: WebMappingRetrieve<Team_Select,Team_Expand,Team_Filter,Team_Fixed,Team_Result,Team_FormattedResult>;
  owninguser: WebMappingRetrieve<SystemUser_Select,SystemUser_Expand,SystemUser_Filter,SystemUser_Fixed,SystemUser_Result,SystemUser_FormattedResult>;
  transactioncurrencyid: WebMappingRetrieve<TransactionCurrency_Select,TransactionCurrency_Expand,TransactionCurrency_Filter,TransactionCurrency_Fixed,TransactionCurrency_Result,TransactionCurrency_FormattedResult>;
}
interface InteractionForEmail_RelatedMany {
  interactionforemail_BulkOperations: WebMappingRetrieve<BulkOperation_Select,BulkOperation_Expand,BulkOperation_Filter,BulkOperation_Fixed,BulkOperation_Result,BulkOperation_FormattedResult>;
  interactionforemail_CampaignResponses: WebMappingRetrieve<CampaignResponse_Select,CampaignResponse_Expand,CampaignResponse_Filter,CampaignResponse_Fixed,CampaignResponse_Result,CampaignResponse_FormattedResult>;
  interactionforemail_IncidentResolutions: WebMappingRetrieve<IncidentResolution_Select,IncidentResolution_Expand,IncidentResolution_Filter,IncidentResolution_Fixed,IncidentResolution_Result,IncidentResolution_FormattedResult>;
  interactionforemail_OpportunityCloses: WebMappingRetrieve<OpportunityClose_Select,OpportunityClose_Expand,OpportunityClose_Filter,OpportunityClose_Fixed,OpportunityClose_Result,OpportunityClose_FormattedResult>;
  interactionforemail_OrderCloses: WebMappingRetrieve<OrderClose_Select,OrderClose_Expand,OrderClose_Filter,OrderClose_Fixed,OrderClose_Result,OrderClose_FormattedResult>;
  interactionforemail_QuoteCloses: WebMappingRetrieve<QuoteClose_Select,QuoteClose_Expand,QuoteClose_Filter,QuoteClose_Fixed,QuoteClose_Result,QuoteClose_FormattedResult>;
  interactionforemail_ServiceAppointments: WebMappingRetrieve<ServiceAppointment_Select,ServiceAppointment_Expand,ServiceAppointment_Filter,ServiceAppointment_Fixed,ServiceAppointment_Result,ServiceAppointment_FormattedResult>;
  interactionforemail_msdyn_approvals: WebMappingRetrieve<msdyn_approval_Select,msdyn_approval_Expand,msdyn_approval_Filter,msdyn_approval_Fixed,msdyn_approval_Result,msdyn_approval_FormattedResult>;
  interactionforemail_msdyn_bookingalerts: WebMappingRetrieve<msdyn_bookingalert_Select,msdyn_bookingalert_Expand,msdyn_bookingalert_Filter,msdyn_bookingalert_Fixed,msdyn_bookingalert_Result,msdyn_bookingalert_FormattedResult>;
  interactionforemail_msdyn_ocliveworkitems: WebMappingRetrieve<msdyn_ocliveworkitem_Select,msdyn_ocliveworkitem_Expand,msdyn_ocliveworkitem_Filter,msdyn_ocliveworkitem_Fixed,msdyn_ocliveworkitem_Result,msdyn_ocliveworkitem_FormattedResult>;
  interactionforemail_msdyn_ocoutboundmessages: WebMappingRetrieve<msdyn_ocoutboundmessage_Select,msdyn_ocoutboundmessage_Expand,msdyn_ocoutboundmessage_Filter,msdyn_ocoutboundmessage_Fixed,msdyn_ocoutboundmessage_Result,msdyn_ocoutboundmessage_FormattedResult>;
  interactionforemail_msdyn_ocsessions: WebMappingRetrieve<msdyn_ocsession_Select,msdyn_ocsession_Expand,msdyn_ocsession_Filter,msdyn_ocsession_Fixed,msdyn_ocsession_Result,msdyn_ocsession_FormattedResult>;
  interactionforemail_msfp_alerts: WebMappingRetrieve<msfp_alert_Select,msfp_alert_Expand,msfp_alert_Filter,msfp_alert_Fixed,msfp_alert_Result,msfp_alert_FormattedResult>;
  interactionforemail_msfp_surveyinvites: WebMappingRetrieve<msfp_surveyinvite_Select,msfp_surveyinvite_Expand,msfp_surveyinvite_Filter,msfp_surveyinvite_Fixed,msfp_surveyinvite_Result,msfp_surveyinvite_FormattedResult>;
  interactionforemail_msfp_surveyresponses: WebMappingRetrieve<msfp_surveyresponse_Select,msfp_surveyresponse_Expand,msfp_surveyresponse_Filter,msfp_surveyresponse_Fixed,msfp_surveyresponse_Result,msfp_surveyresponse_FormattedResult>;
  new_interactionforemail_ActivityPointers: WebMappingRetrieve<ActivityPointer_Select,ActivityPointer_Expand,ActivityPointer_Filter,ActivityPointer_Fixed,ActivityPointer_Result,ActivityPointer_FormattedResult>;
  new_interactionforemail_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
}
interface WebEntitiesRetrieve {
  interactionforemails: WebMappingRetrieve<InteractionForEmail_Select,InteractionForEmail_Expand,InteractionForEmail_Filter,InteractionForEmail_Fixed,InteractionForEmail_Result,InteractionForEmail_FormattedResult>;
}
interface WebEntitiesRelated {
  interactionforemails: WebMappingRelated<InteractionForEmail_RelatedOne,InteractionForEmail_RelatedMany>;
}
interface WebEntitiesCUDA {
  interactionforemails: WebMappingCUDA<InteractionForEmail_Create,InteractionForEmail_Update,InteractionForEmail_Select>;
}
