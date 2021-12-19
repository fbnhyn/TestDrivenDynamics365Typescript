interface LanguageProvisioningState_Base extends WebEntity {
  applicationversion?: string | null;
  languageid?: number | null;
  languageprovisioningstateid?: string | null;
  provisioningstage?: languageprovisioningstates_provisioningstage | null;
  solutionfileversion?: string | null;
  solutionuniquename?: string | null;
}
interface LanguageProvisioningState_Relationships {
}
interface LanguageProvisioningState extends LanguageProvisioningState_Base, LanguageProvisioningState_Relationships {
}
interface LanguageProvisioningState_Create extends LanguageProvisioningState {
}
interface LanguageProvisioningState_Update extends LanguageProvisioningState {
}
interface LanguageProvisioningState_Select {
  applicationversion: WebAttribute<LanguageProvisioningState_Select, { applicationversion: string | null }, {  }>;
  languageid: WebAttribute<LanguageProvisioningState_Select, { languageid: number | null }, {  }>;
  languageprovisioningstateid: WebAttribute<LanguageProvisioningState_Select, { languageprovisioningstateid: string | null }, {  }>;
  provisioningstage: WebAttribute<LanguageProvisioningState_Select, { provisioningstage: languageprovisioningstates_provisioningstage | null }, { provisioningstage_formatted?: string }>;
  solutionfileversion: WebAttribute<LanguageProvisioningState_Select, { solutionfileversion: string | null }, {  }>;
  solutionuniquename: WebAttribute<LanguageProvisioningState_Select, { solutionuniquename: string | null }, {  }>;
}
interface LanguageProvisioningState_Filter {
  applicationversion: string;
  languageid: number;
  languageprovisioningstateid: XQW.Guid;
  provisioningstage: languageprovisioningstates_provisioningstage;
  solutionfileversion: string;
  solutionuniquename: string;
}
interface LanguageProvisioningState_Expand {
}
interface LanguageProvisioningState_FormattedResult {
  provisioningstage_formatted?: string;
}
interface LanguageProvisioningState_Result extends LanguageProvisioningState_Base, LanguageProvisioningState_Relationships {
  "@odata.etag": string;
}
interface LanguageProvisioningState_RelatedOne {
}
interface LanguageProvisioningState_RelatedMany {
}
interface WebEntitiesRetrieve {
  languageprovisioningstates: WebMappingRetrieve<LanguageProvisioningState_Select,LanguageProvisioningState_Expand,LanguageProvisioningState_Filter,LanguageProvisioningState_Fixed,LanguageProvisioningState_Result,LanguageProvisioningState_FormattedResult>;
}
interface WebEntitiesRelated {
  languageprovisioningstates: WebMappingRelated<LanguageProvisioningState_RelatedOne,LanguageProvisioningState_RelatedMany>;
}
interface WebEntitiesCUDA {
  languageprovisioningstates: WebMappingCUDA<LanguageProvisioningState_Create,LanguageProvisioningState_Update,LanguageProvisioningState_Select>;
}
