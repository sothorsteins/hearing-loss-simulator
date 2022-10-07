
/*
Code generated with Faust version 2.49.1
Compilation options: -lang wasm-ib -cn hearingLossSim -es 1 -mcd 16 -single -ftz 2 
*/

function getJSONhearingLossSim() {
	return '{"name": "hearingLossSim","filename": "hearingLossSim.dsp","version": "2.49.1","compile_options": "-lang wasm-ib -cn hearingLossSim -es 1 -mcd 16 -single -ftz 2","include_pathnames": ["/usr/local/share/faust","/usr/local/share/faust","/usr/share/faust",".","/tmp/sessions/E902F9F04FB97AECD825A0A26B4B6925653BC026/web/wap"],"size": 444,"inputs": 1,"outputs": 1,"meta": [ { "basics_lib_name": "Faust Basic Element Library" },{ "basics_lib_version": "0.8" },{ "compile_options": "-single -scal -I libraries/ -I project/ -lang wasm" },{ "filename": "hearingLossSim.dsp" },{ "filters_lib_fir_author": "Julius O. Smith III" },{ "filters_lib_fir_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_fir_license": "MIT-style STK-4.3 license" },{ "filters_lib_iir_author": "Julius O. Smith III" },{ "filters_lib_iir_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_iir_license": "MIT-style STK-4.3 license" },{ "filters_lib_lowpass0_highpass1": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_name": "Faust Filters Library" },{ "filters_lib_peak_eq_author": "Julius O. Smith III" },{ "filters_lib_peak_eq_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_peak_eq_license": "MIT-style STK-4.3 license" },{ "filters_lib_tf2_author": "Julius O. Smith III" },{ "filters_lib_tf2_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_tf2_license": "MIT-style STK-4.3 license" },{ "filters_lib_tf2s_author": "Julius O. Smith III" },{ "filters_lib_tf2s_copyright": "Copyright (C) 2003-2019 by Julius O. Smith III <jos@ccrma.stanford.edu>" },{ "filters_lib_tf2s_license": "MIT-style STK-4.3 license" },{ "filters_lib_version": "0.3" },{ "library_path0": "/libraries/stdfaust.lib" },{ "library_path1": "/libraries/filters.lib" },{ "library_path2": "/libraries/basics.lib" },{ "library_path3": "/libraries/maths.lib" },{ "library_path4": "/libraries/platform.lib" },{ "maths_lib_author": "GRAME" },{ "maths_lib_copyright": "GRAME" },{ "maths_lib_license": "LGPL with exception" },{ "maths_lib_name": "Faust Math Library" },{ "maths_lib_version": "2.5" },{ "name": "hearingLossSim" },{ "platform_lib_name": "Generic Platform Library" },{ "platform_lib_version": "0.2" },{ "version": "2.50.2" }],"ui": [ {"type": "vgroup","label": "hearingLossSim","items": [ {"type": "button","label": "Normal hearing","shortname": "Normal_hearing","address": "/hearingLossSim/Normal_hearing","index": 440,"meta": [{ "0": "" }]},{"type": "button","label": "Medium hearing loss","shortname": "Medium_hearing_loss","address": "/hearingLossSim/Medium_hearing_loss","index": 436,"meta": [{ "1": "" }]},{"type": "button","label": "Severe hearing loss","shortname": "Severe_hearing_loss","address": "/hearingLossSim/Severe_hearing_loss","index": 324,"meta": [{ "2": "" }]}]}]}';
}
function getBase64CodehearingLossSim() { return "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AAAAADgCxAJBAEMAAAAAOAK0A0EAQwAAAAA4ArgDC5CAgIAAACAAIAFIBH8gAQUgAAsPC5CAgIAAACAAIAFIBH8gAAUgAQsPC4yAgIAAACAAIAFqIAI4AgALC6yXgIAAAQBBAAulF3sibmFtZSI6ICJoZWFyaW5nTG9zc1NpbSIsImZpbGVuYW1lIjogImhlYXJpbmdMb3NzU2ltLmRzcCIsInZlcnNpb24iOiAiMi40OS4xIiwiY29tcGlsZV9vcHRpb25zIjogIi1sYW5nIHdhc20taWIgLWNuIGhlYXJpbmdMb3NzU2ltIC1lcyAxIC1tY2QgMTYgLXNpbmdsZSAtZnR6IDIiLCJpbmNsdWRlX3BhdGhuYW1lcyI6IFsiL3Vzci9sb2NhbC9zaGFyZS9mYXVzdCIsIi91c3IvbG9jYWwvc2hhcmUvZmF1c3QiLCIvdXNyL3NoYXJlL2ZhdXN0IiwiLiIsIi90bXAvc2Vzc2lvbnMvRTkwMkY5RjA0RkI5N0FFQ0Q4MjVBMEEyNkI0QjY5MjU2NTNCQzAyNi93ZWIvd2FwIl0sInNpemUiOiA0NDQsImlucHV0cyI6IDEsIm91dHB1dHMiOiAxLCJtZXRhIjogWyB7ICJiYXNpY3NfbGliX25hbWUiOiAiRmF1c3QgQmFzaWMgRWxlbWVudCBMaWJyYXJ5IiB9LHsgImJhc2ljc19saWJfdmVyc2lvbiI6ICIwLjgiIH0seyAiY29tcGlsZV9vcHRpb25zIjogIi1zaW5nbGUgLXNjYWwgLUkgbGlicmFyaWVzLyAtSSBwcm9qZWN0LyAtbGFuZyB3YXNtIiB9LHsgImZpbGVuYW1lIjogImhlYXJpbmdMb3NzU2ltLmRzcCIgfSx7ICJmaWx0ZXJzX2xpYl9maXJfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfZmlyX2NvcHlyaWdodCI6ICJDb3B5cmlnaHQgKEMpIDIwMDMtMjAxOSBieSBKdWxpdXMgTy4gU21pdGggSUlJIDxqb3NAY2NybWEuc3RhbmZvcmQuZWR1PiIgfSx7ICJmaWx0ZXJzX2xpYl9maXJfbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnNfbGliX2lpcl9hdXRob3IiOiAiSnVsaXVzIE8uIFNtaXRoIElJSSIgfSx7ICJmaWx0ZXJzX2xpYl9paXJfY29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX2lpcl9saWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVyc19saWJfbG93cGFzczBfaGlnaHBhc3MxIjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX25hbWUiOiAiRmF1c3QgRmlsdGVycyBMaWJyYXJ5IiB9LHsgImZpbHRlcnNfbGliX3BlYWtfZXFfYXV0aG9yIjogIkp1bGl1cyBPLiBTbWl0aCBJSUkiIH0seyAiZmlsdGVyc19saWJfcGVha19lcV9jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfcGVha19lcV9saWNlbnNlIjogIk1JVC1zdHlsZSBTVEstNC4zIGxpY2Vuc2UiIH0seyAiZmlsdGVyc19saWJfdGYyX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX3RmMl9jb3B5cmlnaHQiOiAiQ29weXJpZ2h0IChDKSAyMDAzLTIwMTkgYnkgSnVsaXVzIE8uIFNtaXRoIElJSSA8am9zQGNjcm1hLnN0YW5mb3JkLmVkdT4iIH0seyAiZmlsdGVyc19saWJfdGYyX2xpY2Vuc2UiOiAiTUlULXN0eWxlIFNUSy00LjMgbGljZW5zZSIgfSx7ICJmaWx0ZXJzX2xpYl90ZjJzX2F1dGhvciI6ICJKdWxpdXMgTy4gU21pdGggSUlJIiB9LHsgImZpbHRlcnNfbGliX3RmMnNfY29weXJpZ2h0IjogIkNvcHlyaWdodCAoQykgMjAwMy0yMDE5IGJ5IEp1bGl1cyBPLiBTbWl0aCBJSUkgPGpvc0BjY3JtYS5zdGFuZm9yZC5lZHU+IiB9LHsgImZpbHRlcnNfbGliX3RmMnNfbGljZW5zZSI6ICJNSVQtc3R5bGUgU1RLLTQuMyBsaWNlbnNlIiB9LHsgImZpbHRlcnNfbGliX3ZlcnNpb24iOiAiMC4zIiB9LHsgImxpYnJhcnlfcGF0aDAiOiAiL2xpYnJhcmllcy9zdGRmYXVzdC5saWIiIH0seyAibGlicmFyeV9wYXRoMSI6ICIvbGlicmFyaWVzL2ZpbHRlcnMubGliIiB9LHsgImxpYnJhcnlfcGF0aDIiOiAiL2xpYnJhcmllcy9iYXNpY3MubGliIiB9LHsgImxpYnJhcnlfcGF0aDMiOiAiL2xpYnJhcmllcy9tYXRocy5saWIiIH0seyAibGlicmFyeV9wYXRoNCI6ICIvbGlicmFyaWVzL3BsYXRmb3JtLmxpYiIgfSx7ICJtYXRoc19saWJfYXV0aG9yIjogIkdSQU1FIiB9LHsgIm1hdGhzX2xpYl9jb3B5cmlnaHQiOiAiR1JBTUUiIH0seyAibWF0aHNfbGliX2xpY2Vuc2UiOiAiTEdQTCB3aXRoIGV4Y2VwdGlvbiIgfSx7ICJtYXRoc19saWJfbmFtZSI6ICJGYXVzdCBNYXRoIExpYnJhcnkiIH0seyAibWF0aHNfbGliX3ZlcnNpb24iOiAiMi41IiB9LHsgIm5hbWUiOiAiaGVhcmluZ0xvc3NTaW0iIH0seyAicGxhdGZvcm1fbGliX25hbWUiOiAiR2VuZXJpYyBQbGF0Zm9ybSBMaWJyYXJ5IiB9LHsgInBsYXRmb3JtX2xpYl92ZXJzaW9uIjogIjAuMiIgfSx7ICJ2ZXJzaW9uIjogIjIuNTAuMiIgfV0sInVpIjogWyB7InR5cGUiOiAidmdyb3VwIiwibGFiZWwiOiAiaGVhcmluZ0xvc3NTaW0iLCJpdGVtcyI6IFsgeyJ0eXBlIjogImJ1dHRvbiIsImxhYmVsIjogIk5vcm1hbCBoZWFyaW5nIiwic2hvcnRuYW1lIjogIk5vcm1hbF9oZWFyaW5nIiwiYWRkcmVzcyI6ICIvaGVhcmluZ0xvc3NTaW0vTm9ybWFsX2hlYXJpbmciLCJpbmRleCI6IDQ0MCwibWV0YSI6IFt7ICIwIjogIiIgfV19LHsidHlwZSI6ICJidXR0b24iLCJsYWJlbCI6ICJNZWRpdW0gaGVhcmluZyBsb3NzIiwic2hvcnRuYW1lIjogIk1lZGl1bV9oZWFyaW5nX2xvc3MiLCJhZGRyZXNzIjogIi9oZWFyaW5nTG9zc1NpbS9NZWRpdW1faGVhcmluZ19sb3NzIiwiaW5kZXgiOiA0MzYsIm1ldGEiOiBbeyAiMSI6ICIiIH1dfSx7InR5cGUiOiAiYnV0dG9uIiwibGFiZWwiOiAiU2V2ZXJlIGhlYXJpbmcgbG9zcyIsInNob3J0bmFtZSI6ICJTZXZlcmVfaGVhcmluZ19sb3NzIiwiYWRkcmVzcyI6ICIvaGVhcmluZ0xvc3NTaW0vU2V2ZXJlX2hlYXJpbmdfbG9zcyIsImluZGV4IjogMzI0LCJtZXRhIjogW3sgIjIiOiAiIiB9XX1dfV19"; }

/************************************************************************
 FAUST Architecture File
 Copyright (C) 2003-2019 GRAME, Centre National de Creation Musicale
 ---------------------------------------------------------------------
 This Architecture section is free software; you can redistribute it
 and/or modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 3 of
 the License, or (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with this program; If not, see <http://www.gnu.org/licenses/>.
 
 EXCEPTION : As a special exception, you may create a larger work
 that contains this FAUST architecture section and distribute
 that work under terms of your choice, so long as this FAUST
 architecture section is not modified.
 
 ************************************************************************
 ************************************************************************/

'use strict';

if (typeof (AudioWorkletNode) === "undefined") {
    alert("AudioWorklet is not supported in this browser !")
}

class hearingLossSimNode extends AudioWorkletNode {

    constructor(context, baseURL, options) {
        super(context, 'hearingLossSim', options);

        this.baseURL = baseURL;
        this.json = options.processorOptions.json;
        this.json_object = JSON.parse(this.json);

        // JSON parsing functions
        this.parse_ui = function (ui, obj) {
            for (var i = 0; i < ui.length; i++) {
                this.parse_group(ui[i], obj);
            }
        }

        this.parse_group = function (group, obj) {
            if (group.items) {
                this.parse_items(group.items, obj);
            }
        }

        this.parse_items = function (items, obj) {
            for (var i = 0; i < items.length; i++) {
                this.parse_item(items[i], obj);
            }
        }

        this.parse_item = function (item, obj) {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                this.parse_items(item.items, obj);
            } else if (item.type === "hbargraph"
                || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
            } else if (item.type === "vslider"
                || item.type === "hslider"
                || item.type === "button"
                || item.type === "checkbox"
                || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.descriptor.push(item);
                // Decode MIDI
                if (item.meta !== undefined) {
                    for (var i = 0; i < item.meta.length; i++) {
                        if (item.meta[i].midi !== undefined) {
                            if (item.meta[i].midi.trim() === "pitchwheel") {
                                obj.fPitchwheelLabel.push({
                                    path: item.address,
                                    min: parseFloat(item.min),
                                    max: parseFloat(item.max)
                                });
                            } else if (item.meta[i].midi.trim().split(" ")[0] === "ctrl") {
                                obj.fCtrlLabel[parseInt(item.meta[i].midi.trim().split(" ")[1])]
                                    .push({
                                        path: item.address,
                                        min: parseFloat(item.min),
                                        max: parseFloat(item.max)
                                    });
                            }
                        }
                    }
                }
                // Define setXXX/getXXX, replacing '/c' with 'C' everywhere in the string
                var set_name = "set" + item.address;
                var get_name = "get" + item.address;
                set_name = set_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                get_name = get_name.replace(/\/./g, (x) => { return x.substr(1, 1).toUpperCase(); });
                obj[set_name] = (val) => { obj.setParamValue(item.address, val); };
                obj[get_name] = () => { return obj.getParamValue(item.address); };
                //console.log(set_name);
                //console.log(get_name);
            }
        }

        this.output_handler = null;

        // input/output items
        this.inputs_items = [];
        this.outputs_items = [];
        this.descriptor = [];

        // MIDI
        this.fPitchwheelLabel = [];
        this.fCtrlLabel = new Array(128);
        for (var i = 0; i < this.fCtrlLabel.length; i++) { this.fCtrlLabel[i] = []; }

        // Parse UI
        this.parse_ui(this.json_object.ui, this);

        // Set message handler
        this.port.onmessage = this.handleMessage.bind(this);
        try {
            if (this.parameters) this.parameters.forEach(p => p.automationRate = "k-rate");
        } catch (e) { }
    }

    // To be called by the message port with messages coming from the processor
    handleMessage(event) {
        var msg = event.data;
        if (this.output_handler) {
            this.output_handler(msg.path, msg.value);
        }
    }

    // Public API

    /**
     * Destroy the node, deallocate resources.
     */
    destroy() {
        this.port.postMessage({ type: "destroy" });
        this.port.close();
    }

    /**
     *  Returns a full JSON description of the DSP.
     */
    getJSON() {
        return this.json;
    }

    // For WAP
    async getMetadata() {
        return new Promise(resolve => {
            let real_url = (this.baseURL === "") ? "main.json" : (this.baseURL + "/main.json");
            fetch(real_url).then(responseJSON => {
                return responseJSON.json();
            }).then(json => {
                resolve(json);
            })
        });
    }

    /**
     *  Set the control value at a given path.
     *
     * @param path - a path to the control
     * @param val - the value to be set
     */
    setParamValue(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    // For WAP
    setParam(path, val) {
        // Needed for sample accurate control
        this.parameters.get(path).setValueAtTime(val, 0);
    }

    /**
     *  Get the control value at a given path.
     *
     * @return the current control value
     */
    getParamValue(path) {
        return this.parameters.get(path).value;
    }

    // For WAP
    getParam(path) {
        return this.parameters.get(path).value;
    }

    /**
     * Setup a control output handler with a function of type (path, value)
     * to be used on each generated output value. This handler will be called
     * each audio cycle at the end of the 'compute' method.
     *
     * @param handler - a function of type function(path, value)
     */
    setOutputParamHandler(handler) {
        this.output_handler = handler;
    }

    /**
     * Get the current output handler.
     */
    getOutputParamHandler() {
        return this.output_handler;
    }

    getNumInputs() {
        return parseInt(this.json_object.inputs);
    }

    getNumOutputs() {
        return parseInt(this.json_object.outputs);
    }

    // For WAP
    inputChannelCount() {
        return parseInt(this.json_object.inputs);
    }

    outputChannelCount() {
        return parseInt(this.json_object.outputs);
    }

    /**
     * Returns an array of all input paths (to be used with setParamValue/getParamValue)
     */
    getParams() {
        return this.inputs_items;
    }

    // For WAP
    getDescriptor() {
        var desc = {};
        for (const item in this.descriptor) {
            if (this.descriptor.hasOwnProperty(item)) {
                if (this.descriptor[item].label != "bypass") {
                    desc = Object.assign({ [this.descriptor[item].label]: { minValue: this.descriptor[item].min, maxValue: this.descriptor[item].max, defaultValue: this.descriptor[item].init } }, desc);
                }
            }
        }
        return desc;
    }

    /**
     * Control change
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param ctrl - the MIDI controller number (0..127)
     * @param value - the MIDI controller value (0..127)
     */
    ctrlChange(channel, ctrl, value) {
        if (this.fCtrlLabel[ctrl] !== []) {
            for (var i = 0; i < this.fCtrlLabel[ctrl].length; i++) {
                var path = this.fCtrlLabel[ctrl][i].path;
                this.setParamValue(path, hearingLossSimNode.remap(value, 0, 127, this.fCtrlLabel[ctrl][i].min, this.fCtrlLabel[ctrl][i].max));
                if (this.output_handler) {
                    this.output_handler(path, this.getParamValue(path));
                }
            }
        }
    }

    /**
     * PitchWeel
     *
     * @param channel - the MIDI channel (0..15, not used for now)
     * @param value - the MIDI controller value (0..16383)
     */
    pitchWheel(channel, wheel) {
        for (var i = 0; i < this.fPitchwheelLabel.length; i++) {
            var pw = this.fPitchwheelLabel[i];
            this.setParamValue(pw.path, hearingLossSimNode.remap(wheel, 0, 16383, pw.min, pw.max));
            if (this.output_handler) {
                this.output_handler(pw.path, this.getParamValue(pw.path));
            }
        }
    }

    /**
     * Generic MIDI message handler.
     */
    midiMessage(data) {
        var cmd = data[0] >> 4;
        var channel = data[0] & 0xf;
        var data1 = data[1];
        var data2 = data[2];

        if (channel === 9) {
            return;
        } else if (cmd === 11) {
            this.ctrlChange(channel, data1, data2);
        } else if (cmd === 14) {
            this.pitchWheel(channel, (data2 * 128.0 + data1));
        }
    }

    // For WAP
    onMidi(data) {
        midiMessage(data);
    }

    /**
     * @returns {Object} describes the path for each available param and its current value
     */
    async getState() {
        var params = new Object();
        for (let i = 0; i < this.getParams().length; i++) {
            Object.assign(params, { [this.getParams()[i]]: `${this.getParam(this.getParams()[i])}` });
        }
        return new Promise(resolve => { resolve(params) });
    }

    /**
     * Sets each params with the value indicated in the state object
     * @param {Object} state 
     */
    async setState(state) {
        return new Promise(resolve => {
            for (const param in state) {
                if (state.hasOwnProperty(param)) this.setParam(param, state[param]);
            }
            try {
                this.gui.setAttribute('state', JSON.stringify(state));
            } catch (error) {
                console.warn("Plugin without gui or GUI not defined", error);
            }
            resolve(state);
        })
    }

    /**
     * A different call closer to the preset management
     * @param {Object} patch to assign as a preset to the node
     */
    setPatch(patch) {
        this.setState(this.presets[patch])
    }

    static remap(v, mn0, mx0, mn1, mx1) {
        return (1.0 * (v - mn0) / (mx0 - mn0)) * (mx1 - mn1) + mn1;
    }

}

// Factory class
class hearingLossSim {

    static fWorkletProcessors;

    /**
     * Factory constructor.
     *
     * @param context - the audio context
     * @param baseURL - the baseURL of the plugin folder
     */
    constructor(context, baseURL = "") {
        console.log("baseLatency " + context.baseLatency);
        console.log("outputLatency " + context.outputLatency);
        console.log("sampleRate " + context.sampleRate);

        this.context = context;
        this.baseURL = baseURL;
        this.pathTable = [];

        this.fWorkletProcessors = this.fWorkletProcessors || [];
    }

    heap2Str(buf) {
        let str = "";
        let i = 0;
        while (buf[i] !== 0) {
            str += String.fromCharCode(buf[i++]);
        }
        return str;
    }

    /**
     * Load additionnal resources to prepare the custom AudioWorkletNode. Returns a promise to be used with the created node.
     */
    async load() {
        try {
            const importObject = {
                env: {
                    memoryBase: 0,
                    tableBase: 0,
                    _abs: Math.abs,

                    // Float version
                    _acosf: Math.acos,
                    _asinf: Math.asin,
                    _atanf: Math.atan,
                    _atan2f: Math.atan2,
                    _ceilf: Math.ceil,
                    _cosf: Math.cos,
                    _expf: Math.exp,
                    _floorf: Math.floor,
                    _fmodf: (x, y) => x % y,
                    _logf: Math.log,
                    _log10f: Math.log10,
                    _max_f: Math.max,
                    _min_f: Math.min,
                    _remainderf: (x, y) => x - Math.round(x / y) * y,
                    _powf: Math.pow,
                    _roundf: Math.fround,
                    _sinf: Math.sin,
                    _sqrtf: Math.sqrt,
                    _tanf: Math.tan,
                    _acoshf: Math.acosh,
                    _asinhf: Math.asinh,
                    _atanhf: Math.atanh,
                    _coshf: Math.cosh,
                    _sinhf: Math.sinh,
                    _tanhf: Math.tanh,
                    _isnanf: Number.isNaN,
                    _isinff: function (x) { return !isFinite(x); },
                    _copysignf: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                    // Double version
                    _acos: Math.acos,
                    _asin: Math.asin,
                    _atan: Math.atan,
                    _atan2: Math.atan2,
                    _ceil: Math.ceil,
                    _cos: Math.cos,
                    _exp: Math.exp,
                    _floor: Math.floor,
                    _fmod: (x, y) => x % y,
                    _log: Math.log,
                    _log10: Math.log10,
                    _max_: Math.max,
                    _min_: Math.min,
                    _remainder: (x, y) => x - Math.round(x / y) * y,
                    _pow: Math.pow,
                    _round: Math.fround,
                    _sin: Math.sin,
                    _sqrt: Math.sqrt,
                    _tan: Math.tan,
                    _acosh: Math.acosh,
                    _asinh: Math.asinh,
                    _atanh: Math.atanh,
                    _cosh: Math.cosh,
                    _sinh: Math.sinh,
                    _tanh: Math.tanh,
                    _isnan: Number.isNaN,
                    _isinf: function (x) { return !isFinite(x); },
                    _copysign: function (x, y) { return Math.sign(x) === Math.sign(y) ? x : -x; },

                    table: new WebAssembly.Table({ initial: 0, element: "anyfunc" })
                }
            };

            let real_url = (this.baseURL === "") ? "hearingLossSim.wasm" : (this.baseURL + "/hearingLossSim.wasm");
            const dspFile = await fetch(real_url);
            const dspBuffer = await dspFile.arrayBuffer();
            const dspModule = await WebAssembly.compile(dspBuffer);
            const dspInstance = await WebAssembly.instantiate(dspModule, importObject);

            let HEAPU8 = new Uint8Array(dspInstance.exports.memory.buffer);
            let json = this.heap2Str(HEAPU8);
            let json_object = JSON.parse(json);
            let options = { wasm_module: dspModule, json: json };

            if (this.fWorkletProcessors.indexOf(name) === -1) {
                try {
                    let re = /JSON_STR/g;
                    let hearingLossSimProcessorString1 = hearingLossSimProcessorString.replace(re, json);
                    let real_url = window.URL.createObjectURL(new Blob([hearingLossSimProcessorString1], { type: 'text/javascript' }));
                    await this.context.audioWorklet.addModule(real_url);
                    // Keep the DSP name
                    console.log("Keep the DSP name");
                    this.fWorkletProcessors.push(name);
                } catch (e) {
                    console.error(e);
                    console.error("Faust " + this.name + " cannot be loaded or compiled");
                    return null;
                }
            }
            this.node = new hearingLossSimNode(this.context, this.baseURL,
                {
                    numberOfInputs: (parseInt(json_object.inputs) > 0) ? 1 : 0,
                    numberOfOutputs: (parseInt(json_object.outputs) > 0) ? 1 : 0,
                    channelCount: Math.max(1, parseInt(json_object.inputs)),
                    outputChannelCount: [parseInt(json_object.outputs)],
                    channelCountMode: "explicit",
                    channelInterpretation: "speakers",
                    processorOptions: options
                });
            this.node.onprocessorerror = () => { console.log('An error from hearingLossSim-processor was detected.'); }
            return (this.node);
        } catch (e) {
            console.error(e);
            console.error("Faust " + this.name + " cannot be loaded or compiled");
            return null;
        }
    }

    async loadGui() {
        return new Promise((resolve, reject) => {
            try {
                // DO THIS ONLY ONCE. If another instance has already been added, do not add the html file again
                let real_url = (this.baseURL === "") ? "main.html" : (this.baseURL + "/main.html");
                if (!this.linkExists(real_url)) {
                    // LINK DOES NOT EXIST, let's add it to the document
                    var link = document.createElement('link');
                    link.rel = 'import';
                    link.href = real_url;
                    document.head.appendChild(link);
                    link.onload = (e) => {
                        // the file has been loaded, instanciate GUI
                        // and get back the HTML elem
                        // HERE WE COULD REMOVE THE HARD CODED NAME
                        var element = createhearingLossSimGUI(this.node);
                        resolve(element);
                    }
                } else {
                    // LINK EXIST, WE AT LEAST CREATED ONE INSTANCE PREVIOUSLY
                    // so we can create another instance
                    var element = createhearingLossSimGUI(this.node);
                    resolve(element);
                }
            } catch (e) {
                console.log(e);
                reject(e);
            }
        });
    };

    linkExists(url) {
        return document.querySelectorAll(`link[href="${url}"]`).length > 0;
    }
}

// Template string for AudioWorkletProcessor

let hearingLossSimProcessorString = `

    'use strict';

    // Monophonic Faust DSP
    class hearingLossSimProcessor extends AudioWorkletProcessor {
        
        // JSON parsing functions
        static parse_ui(ui, obj, callback)
        {
            for (var i = 0; i < ui.length; i++) {
                hearingLossSimProcessor.parse_group(ui[i], obj, callback);
            }
        }
        
        static parse_group(group, obj, callback)
        {
            if (group.items) {
                hearingLossSimProcessor.parse_items(group.items, obj, callback);
            }
        }
        
        static parse_items(items, obj, callback)
        {
            for (var i = 0; i < items.length; i++) {
                callback(items[i], obj, callback);
            }
        }
        
        static parse_item1(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                hearingLossSimProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Nothing
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                obj.push({ name: item.address,
                         defaultValue: item.init,
                         minValue: item.min,
                         maxValue: item.max });
            }
        }
        
        static parse_item2(item, obj, callback)
        {
            if (item.type === "vgroup"
                || item.type === "hgroup"
                || item.type === "tgroup") {
                hearingLossSimProcessor.parse_items(item.items, obj, callback);
            } else if (item.type === "hbargraph"
                       || item.type === "vbargraph") {
                // Keep bargraph adresses
                obj.outputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            } else if (item.type === "vslider"
                       || item.type === "hslider"
                       || item.type === "button"
                       || item.type === "checkbox"
                       || item.type === "nentry") {
                // Keep inputs adresses
                obj.inputs_items.push(item.address);
                obj.pathTable[item.address] = parseInt(item.index);
            }
        }
     
        static get parameterDescriptors() 
        {
            // Analyse JSON to generate AudioParam parameters
            var params = [];
            hearingLossSimProcessor.parse_ui(JSON.parse(\`JSON_STR\`).ui, params, hearingLossSimProcessor.parse_item1);
            return params;
        }
       
        constructor(options)
        {
            super(options);
            this.running = true;
            
            const importObject = {
                    env: {
                        memoryBase: 0,
                        tableBase: 0,

                        // Integer version
                        _abs: Math.abs,

                        // Float version
                        _acosf: Math.acos,
                        _asinf: Math.asin,
                        _atanf: Math.atan,
                        _atan2f: Math.atan2,
                        _ceilf: Math.ceil,
                        _cosf: Math.cos,
                        _expf: Math.exp,
                        _floorf: Math.floor,
                        _fmodf: function(x, y) { return x % y; },
                        _logf: Math.log,
                        _log10f: Math.log10,
                        _max_f: Math.max,
                        _min_f: Math.min,
                        _remainderf: function(x, y) { return x - Math.round(x/y) * y; },
                        _powf: Math.pow,
                        _roundf: Math.fround,
                        _sinf: Math.sin,
                        _sqrtf: Math.sqrt,
                        _tanf: Math.tan,
                        _acoshf: Math.acosh,
                        _asinhf: Math.asinh,
                        _atanhf: Math.atanh,
                        _coshf: Math.cosh,
                        _sinhf: Math.sinh,
                        _tanhf: Math.tanh,

                        // Double version
                        _acos: Math.acos,
                        _asin: Math.asin,
                        _atan: Math.atan,
                        _atan2: Math.atan2,
                        _ceil: Math.ceil,
                        _cos: Math.cos,
                        _exp: Math.exp,
                        _floor: Math.floor,
                        _fmod: function(x, y) { return x % y; },
                        _log: Math.log,
                        _log10: Math.log10,
                        _max_: Math.max,
                        _min_: Math.min,
                        _remainder:function(x, y) { return x - Math.round(x/y) * y; },
                        _pow: Math.pow,
                        _round: Math.fround,
                        _sin: Math.sin,
                        _sqrt: Math.sqrt,
                        _tan: Math.tan,
                        _acosh: Math.acosh,
                        _asinh: Math.asinh,
                        _atanh: Math.atanh,
                        _cosh: Math.cosh,
                        _sinh: Math.sinh,
                        _tanh: Math.tanh,

                        table: new WebAssembly.Table({ initial: 0, element: 'anyfunc' })
                    }
            };
            
            this.hearingLossSim_instance = new WebAssembly.Instance(options.processorOptions.wasm_module, importObject);
            this.json_object = JSON.parse(options.processorOptions.json);
         
            this.output_handler = function(path, value) { this.port.postMessage({ path: path, value: value }); };
            
            this.ins = null;
            this.outs = null;

            this.dspInChannnels = [];
            this.dspOutChannnels = [];

            this.numIn = parseInt(this.json_object.inputs);
            this.numOut = parseInt(this.json_object.outputs);

            // Memory allocator
            this.ptr_size = 4;
            this.sample_size = 4;
            this.integer_size = 4;
            
            this.factory = this.hearingLossSim_instance.exports;
            this.HEAP = this.hearingLossSim_instance.exports.memory.buffer;
            this.HEAP32 = new Int32Array(this.HEAP);
            this.HEAPF32 = new Float32Array(this.HEAP);

            // Warning: keeps a ref on HEAP in Chrome and prevent proper GC
            //console.log(this.HEAP);
            //console.log(this.HEAP32);
            //console.log(this.HEAPF32);

            // bargraph
            this.outputs_timer = 5;
            this.outputs_items = [];

            // input items
            this.inputs_items = [];
        
            // Start of HEAP index

            // DSP is placed first with index 0. Audio buffer start at the end of DSP.
            this.audio_heap_ptr = parseInt(this.json_object.size);

            // Setup pointers offset
            this.audio_heap_ptr_inputs = this.audio_heap_ptr;
            this.audio_heap_ptr_outputs = this.audio_heap_ptr_inputs + (this.numIn * this.ptr_size);

            // Setup buffer offset
            this.audio_heap_inputs = this.audio_heap_ptr_outputs + (this.numOut * this.ptr_size);
            this.audio_heap_outputs = this.audio_heap_inputs + (this.numIn * NUM_FRAMES * this.sample_size);
            
            // Start of DSP memory : DSP is placed first with index 0
            this.dsp = 0;

            this.pathTable = [];
         
            // Send output values to the AudioNode
            this.update_outputs = function ()
            {
                if (this.outputs_items.length > 0 && this.output_handler && this.outputs_timer-- === 0) {
                    this.outputs_timer = 5;
                    for (var i = 0; i < this.outputs_items.length; i++) {
                        this.output_handler(this.outputs_items[i], this.HEAPF32[this.pathTable[this.outputs_items[i]] >> 2]);
                    }
                }
            }
            
            this.initAux = function ()
            {
                var i;
                
                if (this.numIn > 0) {
                    this.ins = this.audio_heap_ptr_inputs;
                    for (i = 0; i < this.numIn; i++) {
                        this.HEAP32[(this.ins >> 2) + i] = this.audio_heap_inputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Ins buffer tables
                    var dspInChans = this.HEAP32.subarray(this.ins >> 2, (this.ins + this.numIn * this.ptr_size) >> 2);
                    for (i = 0; i < this.numIn; i++) {
                        this.dspInChannnels[i] = this.HEAPF32.subarray(dspInChans[i] >> 2, (dspInChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                if (this.numOut > 0) {
                    this.outs = this.audio_heap_ptr_outputs;
                    for (i = 0; i < this.numOut; i++) {
                        this.HEAP32[(this.outs >> 2) + i] = this.audio_heap_outputs + ((NUM_FRAMES * this.sample_size) * i);
                    }
                    
                    // Prepare Out buffer tables
                    var dspOutChans = this.HEAP32.subarray(this.outs >> 2, (this.outs + this.numOut * this.ptr_size) >> 2);
                    for (i = 0; i < this.numOut; i++) {
                        this.dspOutChannnels[i] = this.HEAPF32.subarray(dspOutChans[i] >> 2, (dspOutChans[i] + NUM_FRAMES * this.sample_size) >> 2);
                    }
                }
                
                // Parse UI
                hearingLossSimProcessor.parse_ui(this.json_object.ui, this, hearingLossSimProcessor.parse_item2);
                
                // Init DSP
                this.factory.init(this.dsp, sampleRate); // 'sampleRate' is defined in AudioWorkletGlobalScope  
            }

            this.setParamValue = function (path, val)
            {
                this.HEAPF32[this.pathTable[path] >> 2] = val;
            }

            this.getParamValue = function (path)
            {
                return this.HEAPF32[this.pathTable[path] >> 2];
            }

            // Init resulting DSP
            this.initAux();
        }
        
        process(inputs, outputs, parameters) 
        {
            var input = inputs[0];
            var output = outputs[0];
            
            // Check inputs
            if (this.numIn > 0 && (!input || !input[0] || input[0].length === 0)) {
                //console.log("Process input error");
                return true;
            }
            // Check outputs
            if (this.numOut > 0 && (!output || !output[0] || output[0].length === 0)) {
                //console.log("Process output error");
                return true;
            }
            
            // Copy inputs
            if (input !== undefined) {
                for (var chan = 0; chan < Math.min(this.numIn, input.length); ++chan) {
                    var dspInput = this.dspInChannnels[chan];
                    dspInput.set(input[chan]);
                }
            }
            
            /*
            TODO: sample accurate control change is not yet handled
            When no automation occurs, params[i][1] has a length of 1,
            otherwise params[i][1] has a length of NUM_FRAMES with possible control change each sample
            */
            
            // Update controls
            for (const path in parameters) {
                const paramArray = parameters[path];
                this.setParamValue(path, paramArray[0]);
            }
        
          	// Compute
            try {
                this.factory.compute(this.dsp, NUM_FRAMES, this.ins, this.outs);
            } catch(e) {
                console.log("ERROR in compute (" + e + ")");
            }
            
            // Update bargraph
            this.update_outputs();
            
            // Copy outputs
            if (output !== undefined) {
                for (var chan = 0; chan < Math.min(this.numOut, output.length); ++chan) {
                    var dspOutput = this.dspOutChannnels[chan];
                    output[chan].set(dspOutput);
                }
            }
            
            return this.running;
    	}
        
        handleMessage(event)
        {
            var msg = event.data;
            switch (msg.type) {
                case "destroy": this.running = false; break;
            }
        }
    }

    // Globals
    const NUM_FRAMES = 128;
    try {
        registerProcessor('hearingLossSim', hearingLossSimProcessor);
    } catch (error) {
        console.warn(error);
    }
`;

const dspName = "hearingLossSim";

// WAP factory or npm package module
if (typeof module === "undefined") {
    window.hearingLossSim = hearingLossSim;
    window.FausthearingLossSim = hearingLossSim;
    window[dspName] = hearingLossSim;
} else {
    module.exports = { hearingLossSim };
}
