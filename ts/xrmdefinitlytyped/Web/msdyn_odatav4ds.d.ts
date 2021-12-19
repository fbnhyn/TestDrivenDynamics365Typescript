interface msdyn_odatav4ds_Base extends WebEntity {
  msdyn_description?: string | null;
  msdyn_isparameter10header?: boolean | null;
  msdyn_isparameter1header?: boolean | null;
  msdyn_isparameter2header?: boolean | null;
  msdyn_isparameter3header?: boolean | null;
  msdyn_isparameter4header?: boolean | null;
  msdyn_isparameter5header?: boolean | null;
  msdyn_isparameter6header?: boolean | null;
  msdyn_isparameter7header?: boolean | null;
  msdyn_isparameter8header?: boolean | null;
  msdyn_isparameter9header?: boolean | null;
  msdyn_name?: string | null;
  msdyn_odatav4dsid?: string | null;
  msdyn_paginationmode?: boolean | null;
  msdyn_paginationtype?: new_odatadatasource_paginationtype | null;
  msdyn_parameter10name?: string | null;
  msdyn_parameter10value?: string | null;
  msdyn_parameter1name?: string | null;
  msdyn_parameter1value?: string | null;
  msdyn_parameter2name?: string | null;
  msdyn_parameter2value?: string | null;
  msdyn_parameter3name?: string | null;
  msdyn_parameter3value?: string | null;
  msdyn_parameter4name?: string | null;
  msdyn_parameter4value?: string | null;
  msdyn_parameter5name?: string | null;
  msdyn_parameter5value?: string | null;
  msdyn_parameter6name?: string | null;
  msdyn_parameter6value?: string | null;
  msdyn_parameter7name?: string | null;
  msdyn_parameter7value?: string | null;
  msdyn_parameter8name?: string | null;
  msdyn_parameter8value?: string | null;
  msdyn_parameter9name?: string | null;
  msdyn_parameter9value?: string | null;
  msdyn_returninlinecount?: boolean | null;
  msdyn_timeout?: number | null;
  msdyn_uri?: string | null;
}
interface msdyn_odatav4ds_Relationships {
}
interface msdyn_odatav4ds extends msdyn_odatav4ds_Base, msdyn_odatav4ds_Relationships {
}
interface msdyn_odatav4ds_Create extends msdyn_odatav4ds {
}
interface msdyn_odatav4ds_Update extends msdyn_odatav4ds {
}
interface msdyn_odatav4ds_Select {
  msdyn_description: WebAttribute<msdyn_odatav4ds_Select, { msdyn_description: string | null }, {  }>;
  msdyn_isparameter10header: WebAttribute<msdyn_odatav4ds_Select, { msdyn_isparameter10header: boolean | null }, {  }>;
  msdyn_isparameter1header: WebAttribute<msdyn_odatav4ds_Select, { msdyn_isparameter1header: boolean | null }, {  }>;
  msdyn_isparameter2header: WebAttribute<msdyn_odatav4ds_Select, { msdyn_isparameter2header: boolean | null }, {  }>;
  msdyn_isparameter3header: WebAttribute<msdyn_odatav4ds_Select, { msdyn_isparameter3header: boolean | null }, {  }>;
  msdyn_isparameter4header: WebAttribute<msdyn_odatav4ds_Select, { msdyn_isparameter4header: boolean | null }, {  }>;
  msdyn_isparameter5header: WebAttribute<msdyn_odatav4ds_Select, { msdyn_isparameter5header: boolean | null }, {  }>;
  msdyn_isparameter6header: WebAttribute<msdyn_odatav4ds_Select, { msdyn_isparameter6header: boolean | null }, {  }>;
  msdyn_isparameter7header: WebAttribute<msdyn_odatav4ds_Select, { msdyn_isparameter7header: boolean | null }, {  }>;
  msdyn_isparameter8header: WebAttribute<msdyn_odatav4ds_Select, { msdyn_isparameter8header: boolean | null }, {  }>;
  msdyn_isparameter9header: WebAttribute<msdyn_odatav4ds_Select, { msdyn_isparameter9header: boolean | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_odatav4ds_Select, { msdyn_name: string | null }, {  }>;
  msdyn_odatav4dsid: WebAttribute<msdyn_odatav4ds_Select, { msdyn_odatav4dsid: string | null }, {  }>;
  msdyn_paginationmode: WebAttribute<msdyn_odatav4ds_Select, { msdyn_paginationmode: boolean | null }, {  }>;
  msdyn_paginationtype: WebAttribute<msdyn_odatav4ds_Select, { msdyn_paginationtype: new_odatadatasource_paginationtype | null }, { msdyn_paginationtype_formatted?: string }>;
  msdyn_parameter10name: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter10name: string | null }, {  }>;
  msdyn_parameter10value: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter10value: string | null }, {  }>;
  msdyn_parameter1name: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter1name: string | null }, {  }>;
  msdyn_parameter1value: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter1value: string | null }, {  }>;
  msdyn_parameter2name: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter2name: string | null }, {  }>;
  msdyn_parameter2value: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter2value: string | null }, {  }>;
  msdyn_parameter3name: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter3name: string | null }, {  }>;
  msdyn_parameter3value: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter3value: string | null }, {  }>;
  msdyn_parameter4name: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter4name: string | null }, {  }>;
  msdyn_parameter4value: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter4value: string | null }, {  }>;
  msdyn_parameter5name: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter5name: string | null }, {  }>;
  msdyn_parameter5value: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter5value: string | null }, {  }>;
  msdyn_parameter6name: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter6name: string | null }, {  }>;
  msdyn_parameter6value: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter6value: string | null }, {  }>;
  msdyn_parameter7name: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter7name: string | null }, {  }>;
  msdyn_parameter7value: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter7value: string | null }, {  }>;
  msdyn_parameter8name: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter8name: string | null }, {  }>;
  msdyn_parameter8value: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter8value: string | null }, {  }>;
  msdyn_parameter9name: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter9name: string | null }, {  }>;
  msdyn_parameter9value: WebAttribute<msdyn_odatav4ds_Select, { msdyn_parameter9value: string | null }, {  }>;
  msdyn_returninlinecount: WebAttribute<msdyn_odatav4ds_Select, { msdyn_returninlinecount: boolean | null }, {  }>;
  msdyn_timeout: WebAttribute<msdyn_odatav4ds_Select, { msdyn_timeout: number | null }, {  }>;
  msdyn_uri: WebAttribute<msdyn_odatav4ds_Select, { msdyn_uri: string | null }, {  }>;
}
interface msdyn_odatav4ds_Filter {
  msdyn_description: string;
  msdyn_isparameter10header: boolean;
  msdyn_isparameter1header: boolean;
  msdyn_isparameter2header: boolean;
  msdyn_isparameter3header: boolean;
  msdyn_isparameter4header: boolean;
  msdyn_isparameter5header: boolean;
  msdyn_isparameter6header: boolean;
  msdyn_isparameter7header: boolean;
  msdyn_isparameter8header: boolean;
  msdyn_isparameter9header: boolean;
  msdyn_name: string;
  msdyn_odatav4dsid: XQW.Guid;
  msdyn_paginationmode: boolean;
  msdyn_paginationtype: new_odatadatasource_paginationtype;
  msdyn_parameter10name: string;
  msdyn_parameter10value: string;
  msdyn_parameter1name: string;
  msdyn_parameter1value: string;
  msdyn_parameter2name: string;
  msdyn_parameter2value: string;
  msdyn_parameter3name: string;
  msdyn_parameter3value: string;
  msdyn_parameter4name: string;
  msdyn_parameter4value: string;
  msdyn_parameter5name: string;
  msdyn_parameter5value: string;
  msdyn_parameter6name: string;
  msdyn_parameter6value: string;
  msdyn_parameter7name: string;
  msdyn_parameter7value: string;
  msdyn_parameter8name: string;
  msdyn_parameter8value: string;
  msdyn_parameter9name: string;
  msdyn_parameter9value: string;
  msdyn_returninlinecount: boolean;
  msdyn_timeout: number;
  msdyn_uri: string;
}
interface msdyn_odatav4ds_Expand {
}
interface msdyn_odatav4ds_FormattedResult {
  msdyn_paginationtype_formatted?: string;
}
interface msdyn_odatav4ds_Result extends msdyn_odatav4ds_Base, msdyn_odatav4ds_Relationships {
  "@odata.etag": string;
}
interface msdyn_odatav4ds_RelatedOne {
}
interface msdyn_odatav4ds_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_odatav4ds: WebMappingRetrieve<msdyn_odatav4ds_Select,msdyn_odatav4ds_Expand,msdyn_odatav4ds_Filter,msdyn_odatav4ds_Fixed,msdyn_odatav4ds_Result,msdyn_odatav4ds_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_odatav4ds: WebMappingRelated<msdyn_odatav4ds_RelatedOne,msdyn_odatav4ds_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_odatav4ds: WebMappingCUDA<msdyn_odatav4ds_Create,msdyn_odatav4ds_Update,msdyn_odatav4ds_Select>;
}
