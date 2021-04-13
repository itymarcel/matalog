import mongoose from 'mongoose'

const materialSchema = { 
    name: String,
    desicription: String,  
    applications: [String],
    type: String,
    additionalKeywords: [String],
    format: String,
    producer: String,
    suppliers: [String],
    variations: [String],
    ingredients: [String],
    usedToMake: [String],
    similarMaterials: [String],
    collections: [String],
    cost: String,
    density: String,
    state: String,
    hardness: String,
    texture: String,
    opacity: String,
    dataSheets: [String],
    safetySheets: [String],
    renevable: Boolean,
    recyclable: Boolean,
    compostable: Boolean,
    biodegrationRate: String,
    emission: String,
    recycledContent: String,
    certifications: [String],
    creator: String
};

const Material = mongoose.model("Material", materialSchema);

export default Material;