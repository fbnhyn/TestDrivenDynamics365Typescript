interface msdyn_casesuggestion_Base extends WebEntity {
  msdyn_additionalcontext?: string | null;
  msdyn_casesuggestionid?: string | null;
  msdyn_confidencescore?: number | null;
  msdyn_keyphrases?: string | null;
  msdyn_name?: string | null;
  msdyn_rank?: number | null;
  msdyn_suggestionforentitylogicalname?: string | null;
  msdyn_suggestionforid?: string | null;
}
interface msdyn_casesuggestion_Relationships {
}
interface msdyn_casesuggestion extends msdyn_casesuggestion_Base, msdyn_casesuggestion_Relationships {
  msdyn_suggestedentity_bind$incidents?: string | null;
}
interface msdyn_casesuggestion_Create extends msdyn_casesuggestion {
}
interface msdyn_casesuggestion_Update extends msdyn_casesuggestion {
}
interface msdyn_casesuggestion_Select {
  msdyn_additionalcontext: WebAttribute<msdyn_casesuggestion_Select, { msdyn_additionalcontext: string | null }, {  }>;
  msdyn_casesuggestionid: WebAttribute<msdyn_casesuggestion_Select, { msdyn_casesuggestionid: string | null }, {  }>;
  msdyn_confidencescore: WebAttribute<msdyn_casesuggestion_Select, { msdyn_confidencescore: number | null }, {  }>;
  msdyn_keyphrases: WebAttribute<msdyn_casesuggestion_Select, { msdyn_keyphrases: string | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_casesuggestion_Select, { msdyn_name: string | null }, {  }>;
  msdyn_rank: WebAttribute<msdyn_casesuggestion_Select, { msdyn_rank: number | null }, {  }>;
  msdyn_suggestedentity_guid: WebAttribute<msdyn_casesuggestion_Select, { msdyn_suggestedentity_guid: string | null }, { msdyn_suggestedentity_formatted?: string }>;
  msdyn_suggestionforentitylogicalname: WebAttribute<msdyn_casesuggestion_Select, { msdyn_suggestionforentitylogicalname: string | null }, {  }>;
  msdyn_suggestionforid: WebAttribute<msdyn_casesuggestion_Select, { msdyn_suggestionforid: string | null }, {  }>;
}
interface msdyn_casesuggestion_Filter {
  msdyn_additionalcontext: string;
  msdyn_casesuggestionid: XQW.Guid;
  msdyn_confidencescore: any;
  msdyn_keyphrases: string;
  msdyn_name: string;
  msdyn_rank: number;
  msdyn_suggestedentity_guid: XQW.Guid;
  msdyn_suggestionforentitylogicalname: string;
  msdyn_suggestionforid: string;
}
interface msdyn_casesuggestion_Expand {
  msdyn_suggestedentity: WebExpand<msdyn_casesuggestion_Expand, Incident_Select, Incident_Filter, { msdyn_suggestedentity: Incident_Result }>;
}
interface msdyn_casesuggestion_FormattedResult {
  msdyn_suggestedentity_formatted?: string;
}
interface msdyn_casesuggestion_Result extends msdyn_casesuggestion_Base, msdyn_casesuggestion_Relationships {
  "@odata.etag": string;
  msdyn_suggestedentity_guid: string | null;
}
interface msdyn_casesuggestion_RelatedOne {
  msdyn_suggestedentity: WebMappingRetrieve<Incident_Select,Incident_Expand,Incident_Filter,Incident_Fixed,Incident_Result,Incident_FormattedResult>;
}
interface msdyn_casesuggestion_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_casesuggestions: WebMappingRetrieve<msdyn_casesuggestion_Select,msdyn_casesuggestion_Expand,msdyn_casesuggestion_Filter,msdyn_casesuggestion_Fixed,msdyn_casesuggestion_Result,msdyn_casesuggestion_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_casesuggestions: WebMappingRelated<msdyn_casesuggestion_RelatedOne,msdyn_casesuggestion_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_casesuggestions: WebMappingCUDA<msdyn_casesuggestion_Create,msdyn_casesuggestion_Update,msdyn_casesuggestion_Select>;
}
