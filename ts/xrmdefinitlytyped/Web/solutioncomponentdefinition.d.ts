interface SolutionComponentDefinition_Base extends WebEntity {
  allowdeletebasesolutionrowandfakedelete?: boolean | null;
  allowoverwritecustomizations?: boolean | null;
  allowrecreateforlogicallydeletedrow?: boolean | null;
  alwaysremoveactivecustomizationsonuninstall?: boolean | null;
  canbeaddedtosolutioncomponents?: boolean | null;
  canbehidden?: boolean | null;
  componentstate?: componentstate | null;
  componentxpath?: string | null;
  descendentisviewablecomponent?: boolean | null;
  groupparentcomponentattributename?: string | null;
  groupparentcomponenttype?: number | null;
  hasisrenameableattribute?: boolean | null;
  importsequencenumber?: number | null;
  introducedversion?: string | null;
  isdependencydisabled?: boolean | null;
  isdisplayable?: boolean | null;
  ismanaged?: boolean | null;
  ismergeable?: boolean | null;
  ismetadata?: boolean | null;
  isviewable?: boolean | null;
  labeltypecode?: number | null;
  name?: string | null;
  objecttypecode?: number | null;
  overriddencreatedon?: Date | null;
  overwritetime?: Date | null;
  parentattributename?: string | null;
  primaryentityname?: string | null;
  removeactivecustomizationsbehavior?: solutioncomponentdefinition_removecustomization | null;
  rootattributename?: string | null;
  rootcomponent?: number | null;
  solutioncomponentdefinitionid?: string | null;
  solutioncomponentdefinitionidunique?: string | null;
  solutioncomponenttype?: number | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  useforcedeleteforsolutionupdate?: boolean | null;
  useforceupdatealways?: boolean | null;
  usesentinelrowinbasesolution?: boolean | null;
  viewabledescendentcomponenttype?: number | null;
}
interface SolutionComponentDefinition_Relationships {
}
interface SolutionComponentDefinition extends SolutionComponentDefinition_Base, SolutionComponentDefinition_Relationships {
}
interface SolutionComponentDefinition_Create extends SolutionComponentDefinition {
}
interface SolutionComponentDefinition_Update extends SolutionComponentDefinition {
}
interface SolutionComponentDefinition_Select {
  allowdeletebasesolutionrowandfakedelete: WebAttribute<SolutionComponentDefinition_Select, { allowdeletebasesolutionrowandfakedelete: boolean | null }, {  }>;
  allowoverwritecustomizations: WebAttribute<SolutionComponentDefinition_Select, { allowoverwritecustomizations: boolean | null }, {  }>;
  allowrecreateforlogicallydeletedrow: WebAttribute<SolutionComponentDefinition_Select, { allowrecreateforlogicallydeletedrow: boolean | null }, {  }>;
  alwaysremoveactivecustomizationsonuninstall: WebAttribute<SolutionComponentDefinition_Select, { alwaysremoveactivecustomizationsonuninstall: boolean | null }, {  }>;
  canbeaddedtosolutioncomponents: WebAttribute<SolutionComponentDefinition_Select, { canbeaddedtosolutioncomponents: boolean | null }, {  }>;
  canbehidden: WebAttribute<SolutionComponentDefinition_Select, { canbehidden: boolean | null }, {  }>;
  componentstate: WebAttribute<SolutionComponentDefinition_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  componentxpath: WebAttribute<SolutionComponentDefinition_Select, { componentxpath: string | null }, {  }>;
  descendentisviewablecomponent: WebAttribute<SolutionComponentDefinition_Select, { descendentisviewablecomponent: boolean | null }, {  }>;
  groupparentcomponentattributename: WebAttribute<SolutionComponentDefinition_Select, { groupparentcomponentattributename: string | null }, {  }>;
  groupparentcomponenttype: WebAttribute<SolutionComponentDefinition_Select, { groupparentcomponenttype: number | null }, {  }>;
  hasisrenameableattribute: WebAttribute<SolutionComponentDefinition_Select, { hasisrenameableattribute: boolean | null }, {  }>;
  importsequencenumber: WebAttribute<SolutionComponentDefinition_Select, { importsequencenumber: number | null }, {  }>;
  introducedversion: WebAttribute<SolutionComponentDefinition_Select, { introducedversion: string | null }, {  }>;
  isdependencydisabled: WebAttribute<SolutionComponentDefinition_Select, { isdependencydisabled: boolean | null }, {  }>;
  isdisplayable: WebAttribute<SolutionComponentDefinition_Select, { isdisplayable: boolean | null }, {  }>;
  ismanaged: WebAttribute<SolutionComponentDefinition_Select, { ismanaged: boolean | null }, {  }>;
  ismergeable: WebAttribute<SolutionComponentDefinition_Select, { ismergeable: boolean | null }, {  }>;
  ismetadata: WebAttribute<SolutionComponentDefinition_Select, { ismetadata: boolean | null }, {  }>;
  isviewable: WebAttribute<SolutionComponentDefinition_Select, { isviewable: boolean | null }, {  }>;
  labeltypecode: WebAttribute<SolutionComponentDefinition_Select, { labeltypecode: number | null }, {  }>;
  name: WebAttribute<SolutionComponentDefinition_Select, { name: string | null }, {  }>;
  objecttypecode: WebAttribute<SolutionComponentDefinition_Select, { objecttypecode: number | null }, {  }>;
  overriddencreatedon: WebAttribute<SolutionComponentDefinition_Select, { overriddencreatedon: Date | null }, { overriddencreatedon_formatted?: string }>;
  overwritetime: WebAttribute<SolutionComponentDefinition_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  parentattributename: WebAttribute<SolutionComponentDefinition_Select, { parentattributename: string | null }, {  }>;
  primaryentityname: WebAttribute<SolutionComponentDefinition_Select, { primaryentityname: string | null }, {  }>;
  removeactivecustomizationsbehavior: WebAttribute<SolutionComponentDefinition_Select, { removeactivecustomizationsbehavior: solutioncomponentdefinition_removecustomization | null }, { removeactivecustomizationsbehavior_formatted?: string }>;
  rootattributename: WebAttribute<SolutionComponentDefinition_Select, { rootattributename: string | null }, {  }>;
  rootcomponent: WebAttribute<SolutionComponentDefinition_Select, { rootcomponent: number | null }, {  }>;
  solutioncomponentdefinitionid: WebAttribute<SolutionComponentDefinition_Select, { solutioncomponentdefinitionid: string | null }, {  }>;
  solutioncomponentdefinitionidunique: WebAttribute<SolutionComponentDefinition_Select, { solutioncomponentdefinitionidunique: string | null }, {  }>;
  solutioncomponenttype: WebAttribute<SolutionComponentDefinition_Select, { solutioncomponenttype: number | null }, {  }>;
  solutionid: WebAttribute<SolutionComponentDefinition_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<SolutionComponentDefinition_Select, { supportingsolutionid: string | null }, {  }>;
  useforcedeleteforsolutionupdate: WebAttribute<SolutionComponentDefinition_Select, { useforcedeleteforsolutionupdate: boolean | null }, {  }>;
  useforceupdatealways: WebAttribute<SolutionComponentDefinition_Select, { useforceupdatealways: boolean | null }, {  }>;
  usesentinelrowinbasesolution: WebAttribute<SolutionComponentDefinition_Select, { usesentinelrowinbasesolution: boolean | null }, {  }>;
  viewabledescendentcomponenttype: WebAttribute<SolutionComponentDefinition_Select, { viewabledescendentcomponenttype: number | null }, {  }>;
}
interface SolutionComponentDefinition_Filter {
  allowdeletebasesolutionrowandfakedelete: boolean;
  allowoverwritecustomizations: boolean;
  allowrecreateforlogicallydeletedrow: boolean;
  alwaysremoveactivecustomizationsonuninstall: boolean;
  canbeaddedtosolutioncomponents: boolean;
  canbehidden: boolean;
  componentstate: componentstate;
  componentxpath: string;
  descendentisviewablecomponent: boolean;
  groupparentcomponentattributename: string;
  groupparentcomponenttype: number;
  hasisrenameableattribute: boolean;
  importsequencenumber: number;
  introducedversion: string;
  isdependencydisabled: boolean;
  isdisplayable: boolean;
  ismanaged: boolean;
  ismergeable: boolean;
  ismetadata: boolean;
  isviewable: boolean;
  labeltypecode: number;
  name: string;
  objecttypecode: number;
  overriddencreatedon: Date;
  overwritetime: Date;
  parentattributename: string;
  primaryentityname: string;
  removeactivecustomizationsbehavior: solutioncomponentdefinition_removecustomization;
  rootattributename: string;
  rootcomponent: number;
  solutioncomponentdefinitionid: XQW.Guid;
  solutioncomponentdefinitionidunique: XQW.Guid;
  solutioncomponenttype: number;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  useforcedeleteforsolutionupdate: boolean;
  useforceupdatealways: boolean;
  usesentinelrowinbasesolution: boolean;
  viewabledescendentcomponenttype: number;
}
interface SolutionComponentDefinition_Expand {
}
interface SolutionComponentDefinition_FormattedResult {
  componentstate_formatted?: string;
  overriddencreatedon_formatted?: string;
  overwritetime_formatted?: string;
  removeactivecustomizationsbehavior_formatted?: string;
}
interface SolutionComponentDefinition_Result extends SolutionComponentDefinition_Base, SolutionComponentDefinition_Relationships {
  "@odata.etag": string;
}
interface SolutionComponentDefinition_RelatedOne {
}
interface SolutionComponentDefinition_RelatedMany {
}
interface WebEntitiesRetrieve {
  solutioncomponentdefinitions: WebMappingRetrieve<SolutionComponentDefinition_Select,SolutionComponentDefinition_Expand,SolutionComponentDefinition_Filter,SolutionComponentDefinition_Fixed,SolutionComponentDefinition_Result,SolutionComponentDefinition_FormattedResult>;
}
interface WebEntitiesRelated {
  solutioncomponentdefinitions: WebMappingRelated<SolutionComponentDefinition_RelatedOne,SolutionComponentDefinition_RelatedMany>;
}
interface WebEntitiesCUDA {
  solutioncomponentdefinitions: WebMappingCUDA<SolutionComponentDefinition_Create,SolutionComponentDefinition_Update,SolutionComponentDefinition_Select>;
}
