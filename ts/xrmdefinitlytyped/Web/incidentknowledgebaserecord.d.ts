interface IncidentKnowledgeBaseRecord_Base extends WebEntity {
  importsequencenumber?: number | null;
  incidentid?: string | null;
  incidentknowledgebaserecordid?: string | null;
  knowledgebaserecordid?: string | null;
  name?: string | null;
  overriddencreatedon?: Date | null;
  timezoneruleversionnumber?: number | null;
  utcconversiontimezonecode?: number | null;
  versionnumber?: number | null;
}
interface IncidentKnowledgeBaseRecord_Relationships {
  KnowledgeBaseRecord_Incident?: Incident_Result[] | null;
  incidentknowledgebaserecord_AsyncOperations?: AsyncOperation_Result[] | null;
  incidentknowledgebaserecord_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  incidentknowledgebaserecord_MailboxTrackingFolders?: MailboxTrackingFolder_Result[] | null;
  incidentknowledgebaserecord_PrincipalObjectAttributeAccesses?: PrincipalObjectAttributeAccess_Result[] | null;
  incidentknowledgebaserecord_UserEntityInstanceDatas?: UserEntityInstanceData_Result[] | null;
}
interface IncidentKnowledgeBaseRecord extends IncidentKnowledgeBaseRecord_Base, IncidentKnowledgeBaseRecord_Relationships {
}
interface IncidentKnowledgeBaseRecord_Create extends IncidentKnowledgeBaseRecord {
}
interface IncidentKnowledgeBaseRecord_Update extends IncidentKnowledgeBaseRecord {
}
interface IncidentKnowledgeBaseRecord_Select {
  importsequencenumber: WebAttribute<IncidentKnowledgeBaseRecord_Select, { importsequencenumber: number | null }, {  }>;
  incidentid: WebAttribute<IncidentKnowledgeBaseRecord_Select, { incidentid: string | null }, {  }>;
  incidentknowledgebaserecordid: WebAttribute<IncidentKnowledgeBaseRecord_Select, { incidentknowledgebaserecordid: string | null }, {  }>;
  knowledgebaserecordid: WebAttribute<IncidentKnowledgeBaseRecord_Select, { knowledgebaserecordid: string | null }, {  }>;
  name: WebAttribute<IncidentKnowledgeBaseRecord_Select, { name: string | null }, {  }>;
  overriddencreatedon: WebAttribute<IncidentKnowledgeBaseRecord_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  timezoneruleversionnumber: WebAttribute<IncidentKnowledgeBaseRecord_Select, { timezoneruleversionnumber: number | null }, {  }>;
  utcconversiontimezonecode: WebAttribute<IncidentKnowledgeBaseRecord_Select, { utcconversiontimezonecode: number | null }, {  }>;
  versionnumber: WebAttribute<IncidentKnowledgeBaseRecord_Select, { versionnumber: number | null }, {  }>;
}
interface IncidentKnowledgeBaseRecord_Filter {
  importsequencenumber: number;
  incidentid: XQW.Guid;
  incidentknowledgebaserecordid: XQW.Guid;
  knowledgebaserecordid: XQW.Guid;
  name: string;
  overriddencreatedon: Date;
  timezoneruleversionnumber: number;
  utcconversiontimezonecode: number;
  versionnumber: number;
}
interface IncidentKnowledgeBaseRecord_Expand {
  KnowledgeBaseRecord_Incident: WebExpand<IncidentKnowledgeBaseRecord_Expand, Incident_Select, Incident_Filter, { KnowledgeBaseRecord_Incident: Incident_Result[] }>;
  incidentknowledgebaserecord_AsyncOperations: WebExpand<IncidentKnowledgeBaseRecord_Expand, AsyncOperation_Select, AsyncOperation_Filter, { incidentknowledgebaserecord_AsyncOperations: AsyncOperation_Result[] }>;
  incidentknowledgebaserecord_BulkDeleteFailures: WebExpand<IncidentKnowledgeBaseRecord_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { incidentknowledgebaserecord_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  incidentknowledgebaserecord_MailboxTrackingFolders: WebExpand<IncidentKnowledgeBaseRecord_Expand, MailboxTrackingFolder_Select, MailboxTrackingFolder_Filter, { incidentknowledgebaserecord_MailboxTrackingFolders: MailboxTrackingFolder_Result[] }>;
  incidentknowledgebaserecord_PrincipalObjectAttributeAccesses: WebExpand<IncidentKnowledgeBaseRecord_Expand, PrincipalObjectAttributeAccess_Select, PrincipalObjectAttributeAccess_Filter, { incidentknowledgebaserecord_PrincipalObjectAttributeAccesses: PrincipalObjectAttributeAccess_Result[] }>;
  incidentknowledgebaserecord_UserEntityInstanceDatas: WebExpand<IncidentKnowledgeBaseRecord_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { incidentknowledgebaserecord_UserEntityInstanceDatas: UserEntityInstanceData_Result[] }>;
}
interface IncidentKnowledgeBaseRecord_FormattedResult {
  overriddencreatedon_formatted?: string;
}
interface IncidentKnowledgeBaseRecord_Result extends IncidentKnowledgeBaseRecord_Base, IncidentKnowledgeBaseRecord_Relationships {
  "@odata.etag": string;
}
interface IncidentKnowledgeBaseRecord_RelatedOne {
}
interface IncidentKnowledgeBaseRecord_RelatedMany {
  KnowledgeBaseRecord_Incident: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
  incidentknowledgebaserecord_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  incidentknowledgebaserecord_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  incidentknowledgebaserecord_MailboxTrackingFolders: WebMappingRetrieve<MailboxTrackingFolder_Select,MailboxTrackingFolder_Expand,MailboxTrackingFolder_Filter,MailboxTrackingFolder_Fixed,MailboxTrackingFolder_Result,MailboxTrackingFolder_FormattedResult>;
  incidentknowledgebaserecord_PrincipalObjectAttributeAccesses: WebMappingRetrieve<PrincipalObjectAttributeAccess_Select,PrincipalObjectAttributeAccess_Expand,PrincipalObjectAttributeAccess_Filter,PrincipalObjectAttributeAccess_Fixed,PrincipalObjectAttributeAccess_Result,PrincipalObjectAttributeAccess_FormattedResult>;
  incidentknowledgebaserecord_UserEntityInstanceDatas: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  incidentknowledgebaserecords: WebMappingRetrieve<IncidentKnowledgeBaseRecord_Select,IncidentKnowledgeBaseRecord_Expand,IncidentKnowledgeBaseRecord_Filter,IncidentKnowledgeBaseRecord_Fixed,IncidentKnowledgeBaseRecord_Result,IncidentKnowledgeBaseRecord_FormattedResult>;
}
interface WebEntitiesRelated {
  incidentknowledgebaserecords: WebMappingRelated<IncidentKnowledgeBaseRecord_RelatedOne,IncidentKnowledgeBaseRecord_RelatedMany>;
}
interface WebEntitiesCUDA {
  incidentknowledgebaserecords: WebMappingCUDA<IncidentKnowledgeBaseRecord_Create,IncidentKnowledgeBaseRecord_Update,IncidentKnowledgeBaseRecord_Select>;
}
