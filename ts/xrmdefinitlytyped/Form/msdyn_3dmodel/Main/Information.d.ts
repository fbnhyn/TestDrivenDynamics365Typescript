declare namespace Form.msdyn_3dmodel.Main {
  namespace Information {
    namespace Tabs {
      interface _3dModelGeneralTab extends Xrm.SectionCollectionBase {
        get(name: "3dModelNotesSection"): Xrm.PageSection;
        get(name: "3dModelViewerSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_filetype"): Xrm.OptionSetAttribute<msdyn_3dmodel_msdyn_filetype>;
      get(name: "msdyn_fileurl"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_storagetype"): Xrm.OptionSetAttribute<msdyn_3dmodel_msdyn_storagetype>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_3dViewer"): Xrm.WebResourceControl;
      get(name: "msdyn_filetype"): Xrm.OptionSetControl<msdyn_3dmodel_msdyn_filetype>;
      get(name: "msdyn_fileurl"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_storagetype"): Xrm.OptionSetControl<msdyn_3dmodel_msdyn_storagetype>;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "3dModelGeneralTab"): Xrm.PageTab<Tabs._3dModelGeneralTab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_filetype"): Xrm.OptionSetAttribute<msdyn_3dmodel_msdyn_filetype>;
    getAttribute(attributeName: "msdyn_fileurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_storagetype"): Xrm.OptionSetAttribute<msdyn_3dmodel_msdyn_storagetype>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_3dViewer"): Xrm.WebResourceControl;
    getControl(controlName: "msdyn_filetype"): Xrm.OptionSetControl<msdyn_3dmodel_msdyn_filetype>;
    getControl(controlName: "msdyn_fileurl"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_storagetype"): Xrm.OptionSetControl<msdyn_3dmodel_msdyn_storagetype>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
