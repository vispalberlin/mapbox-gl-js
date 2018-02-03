import flow from 'rollup-plugin-flow';
import buble from 'rollup-plugin-buble';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import unassert from 'rollup-plugin-unassert';

export default [
    {
        input: 'src/style-spec/validate/validate.js',
        output: {
            name: 'mapboxgl',
            file: 'mapboxgl-rollup.js',
            format: 'umd'
        },
        plugins: [
            flow(),
            buble({transforms: {dangerousForOf: true}, objectAssign: "Object.assign"}),
            unassert(),
            resolve(),
            commonjs()
        ]
    }
]
