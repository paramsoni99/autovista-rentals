// src/components/models/2021_por.jsx
import React, { useEffect, useState, useMemo } from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import gsap from 'gsap';
import * as THREE from 'three';
import { porscheColors } from '../../assets/assets'; 

export function Porcar(props) {
  const { scene } = useGLTF('/2021_por.glb');
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  
  const [colorIndex, setColorIndex] = useState(0);

  // 1. Increased interval to 3 seconds to allow for a longer transition
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % porscheColors.length);
    }, 3000); // 3 seconds total per color cycle

    return () => clearInterval(interval);
  }, []);

  // 2. Smoother and longer GSAP transition
  useEffect(() => {
    const paintMaterial = materials.PorschePorsche_911TurboS992_2021RegionA1;
    
    if (paintMaterial) {
      const newColor = new THREE.Color(porscheColors[colorIndex]);
      
      gsap.to(paintMaterial.color, {
        r: newColor.r,
        g: newColor.g,
        b: newColor.b,
        duration: 2.8, // Increased duration for a slower, "longer" feel
        ease: "sine.inOut", // Switched to sine for the smoothest start/stop
      });

      // Keep the premium shine
      paintMaterial.metalness = 0.9;
      paintMaterial.roughness = 0.1;
    }
  }, [colorIndex, materials]);


  console.log("Porsche loaded:" , materials);


  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <primitive object={nodes._rootJoint} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_RegionA_1_Hard_NonTextured_Skinned_Geo_lodA_Exterior_a_RegionA_1_Hard_NonTextured_Skinned_Geo_Porsche_911TurboS9_PorschePorsche_911TurboS992_2021RegionA1_0.geometry} material={materials.PorschePorsche_911TurboS992_2021RegionA1} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_RegionA_1_Hard_NonTextured_NoSkin_Geo_lodA_Exterior_a_RegionA_1_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS992_PorschePorsche_911TurboS992_2021RegionA1_0.geometry} material={materials.PorschePorsche_911TurboS992_2021RegionA1} />
        <mesh geometry={nodes.PorschelodA_LightFront_a_GlassOuter_1_Hard_NonTextured_NoSkin_Geo_lodA_LightFront_a_GlassOuter_1_Hard_NonTextured_NoSkin_Geo_Porsche_91_light_glass_0.geometry} material={materials.light_glass} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_Window_1_Hard_NonTextured_NoSkin_Geo_lodA_Exterior_a_Window_1_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS992_2_glass_0.geometry} material={materials.glass} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_Window_1_Hard_NonTextured_Skinned_Geo_lodA_Exterior_a_Window_1_Hard_NonTextured_Skinned_Geo_Porsche_911TurboS992_glass_0.geometry} material={materials.glass} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_WindowInside_1_Hard_NonTextured_NoSkin_Geo_lodA_Exterior_a_WindowInside_1_Hard_NonTextured_NoSkin_Geo_Porsche_91_glass_0.geometry} material={materials.glass} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_WindowInside_1_Hard_NonTextured_Skinned_Geo_lodA_Exterior_a_WindowInside_1_Hard_NonTextured_Skinned_Geo_Porsche__glass_0.geometry} material={materials.glass} />
        <mesh geometry={nodes.PorschelodAB_Exterior_a_ManufacturerPlate_1_Hard_NonTextured_N_bcb9e36_lodAB_Exterior_a_ManufacturerPlate_1_Hard_NonTextured_N_bcb9e36__PorschePorsche_911TurboS992_2021Exterior_a_ManufacturerPlate_1_43b0243_0.geometry} material={materials.PorschePorsche_911TurboS992_2021Exterior_a_ManufacturerPlate_1_43b0243} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_lodA_Exterior_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS9_Plastic_SH_0.geometry} material={materials.Plastic_SH} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_lodA_Exterior_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS9_chrome_0.geometry} material={materials.chrome} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_Coloured_1_Hard_Textured_NoiseA_NoSkin_Geo_lodA_Exterior_a_Coloured_1_Hard_Textured_NoiseA_NoSkin_Geo_Porsche_91_Plastic_R_0.geometry} material={materials.Plastic_R} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_Coloured_1_Hard_Textured_NoiseA_Skinned_Geo_lodA_Exterior_a_Coloured_1_Hard_Textured_NoiseA_Skinned_Geo_Porsche__Plastic_SH_0.geometry} material={materials.Plastic_SH} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_Coloured_1_Hard_NonTextured_Skinned_Geo_lodA_Exterior_a_Coloured_1_Hard_NonTextured_Skinned_Geo_Porsche_911Turbo_Plastic_SH_0.geometry} material={materials.Plastic_SH} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_Coloured_1_Hard_NonTextured_Skinned_Geo_lodA_Exterior_a_Coloured_1_Hard_NonTextured_Skinned_Geo_Porsche_911Turbo_mirror_0.geometry} material={materials.mirror} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_PatternBNoAlpha_1_Hard_NonTextured_Skinned_Geo_lodA_Exterior_a_PatternBNoAlpha_1_Hard_NonTextured_Skinned_Geo_Po_Exterior_Pattern_B_0.geometry} material={materials.Exterior_Pattern_B} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_WindowFrame_1_Hard_NonTextured_NoSkin_Geo_lodA_Exterior_a_WindowFrame_1_Hard_NonTextured_NoSkin_Geo_Porsche_911T_glass_surr_0.geometry} material={materials.glass_surr} />
        <mesh geometry={nodes.PorschelodA_LightFront_a_Badges_1_Hard_NonTextured_Skinned_Geo_lodA_LightFront_a_Badges_1_Hard_NonTextured_Skinned_Geo_Porsche_911Turbo_PorschePorsche_911TurboS992_2021LightFront_a_Badges_1_Hard_Non_6f2f11c1_0.geometry} material={materials.PorschePorsche_911TurboS992_2021LightFront_a_Badges_1_Hard_Non_6f2f11c1} />
        <mesh geometry={nodes.PorschelodA_LightFront_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_lodA_LightFront_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_Porsche_911Tur_Plastic_SH_0.geometry} material={materials.Plastic_SH} />
        <mesh geometry={nodes.PorschelodA_LightFront_a_Light_1_Hard_NonTextured_Skinned_Geo_lodA_LightFront_a_Light_1_Hard_NonTextured_Skinned_Geo_Porsche_911TurboS9_Light_T_0.geometry} material={materials.Light_T} />
        <mesh geometry={nodes.PorschelodA_LightFront_a_Details_1_Hard_NonTextured_Skinned_Geo_lodA_LightFront_a_Details_1_Hard_NonTextured_Skinned_Geo_Porsche_911Tur_Light_Normal_B_0.geometry} material={materials.Light_Normal_B} />
        <mesh geometry={nodes.PorschelodA_Interior_a_GlassInner_1_Hard_NonTextured_NoSkin_Geo_lodA_Interior_a_GlassInner_1_Hard_NonTextured_NoSkin_Geo_Porsche_911Tur_light_glass_0.geometry} material={materials.light_glass} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_Textured_GrainB_NoSkin_Geo_lodA_Interior_a_Coloured_1_Hard_Textured_GrainB_NoSkin_Geo_Porsche_91_leather_int_1_0.geometry} material={materials.leather_int_1} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Badges_1_Hard_NonTextured_Skinned_Geo_lodA_Interior_a_Badges_1_Hard_NonTextured_Skinned_Geo_Porsche_911TurboS992_badges_0.geometry} material={materials.badges} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_lodA_Interior_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS9_Plastic_R_0.geometry} material={materials.Plastic_R} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_lodA_Interior_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS9_chrome_0.geometry} material={materials.chrome} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_lodA_Interior_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS9_mirror_0.geometry} material={materials.mirror} />
        <mesh geometry={nodes.PorschelodA_Interior_a_LabelsEmissive_1_Hard_NonTextured_Skinned_Geo_lodA_Interior_a_LabelsEmissive_1_Hard_NonTextured_Skinned_Geo_Pors_emiss_interior_0.geometry} material={materials.emiss_interior} />
        <mesh geometry={nodes.PorschelodA_Interior_a_PatternCNoAlpha_1_Hard_NonTextured_Skinned_Geo_lodA_Interior_a_PatternCNoAlpha_1_Hard_NonTextured_Skinned_Geo_Po_Porscheint_pattern_C_0.geometry} material={materials.Porscheint_pattern_C} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Details_1_Hard_NonTextured_Skinned_Geo_lodA_Interior_a_Details_1_Hard_NonTextured_Skinned_Geo_Porsche_911TurboS9_INT_Normal_L_0.geometry} material={materials.INT_Normal_L} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Labels_1_Hard_NonTextured_NoSkin_Geo_lodA_Interior_a_Labels_1_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS992_2_PorschePorsche_911TurboS992_2021Interior_a_Labels_1_Hard_NonTe_891903b1_0.geometry} material={materials.PorschePorsche_911TurboS992_2021Interior_a_Labels_1_Hard_NonTe_891903b1} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_Base_1_Hard_NonTextured_NoSkin_Geo_lodA_Exterior_a_Base_1_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS992_2021E_chassis_0.geometry} material={materials.chassis} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_Base_1_Hard_NonTextured_Skinned_Geo_lodA_Exterior_a_Base_1_Hard_NonTextured_Skinned_Geo_Porsche_911TurboS992_202_chassis_0.geometry} material={materials.chassis} />
        <mesh geometry={nodes.PorschelodA_Interior_a_StitchesZones_1_Hard_Textured_GrainB_Sk_1406dc5_lodA_Interior_a_StitchesZones_1_Hard_Textured_GrainB_Sk_1406dc5__PorschePorsche_911TurboS992_2021Interior_a_StitchesZones_1_Har_acf0ce8_0.geometry} material={materials.PorschePorsche_911TurboS992_2021Interior_a_StitchesZones_1_Har_acf0ce8} />
        <mesh geometry={nodes.PorschelodA_Interior_a_PatternPerforatedCleanRombus_1_Hard_Tex_d7fd8ef_lodA_Interior_a_PatternPerforatedCleanRombus_1_Hard_Tex_d7fd8ef__Int_til_0.geometry} material={materials.Int_til} />
        <mesh geometry={nodes.PorschelodA_Interior_a_PatternBNoAlpha_1_Hard_Textured_NoiseA__2257825_lodA_Interior_a_PatternBNoAlpha_1_Hard_Textured_NoiseA__2257825__PorschePorsche_911TurboS992_2021Interior_a_PatternBNoAlpha_1_H_3cafef7_0.geometry} material={materials.PorschePorsche_911TurboS992_2021Interior_a_PatternBNoAlpha_1_H_3cafef7} />
        <mesh geometry={nodes.PorschelodA_Interior_a_CarbonSatin_1_Hard_Textured_CarbonTwill_ac1df25_lodA_Interior_a_CarbonSatin_1_Hard_Textured_CarbonTwill_ac1df25__PorscheCarbon_0.geometry} material={materials.PorscheCarbon} />
        <mesh geometry={nodes.PorschelodA_LightRear_a_GlassOuter_1_Hard_NonTextured_NoSkin_Geo_lodA_LightRear_a_GlassOuter_1_Hard_NonTextured_NoSkin_Geo_Porsche_911T_glass_0.geometry} material={materials.glass} />
        <mesh geometry={nodes.PorschelodA_LightRear_a_GlassOuter_1_Hard_NonTextured_NoSkin_Geo_lodA_LightRear_a_GlassOuter_1_Hard_NonTextured_NoSkin_Geo_Porsche_911T_red_glass_0.geometry} material={materials.red_glass} />
        <mesh geometry={nodes.PorschelodA_LightRear_a_GlassInnerPattern_1_Hard_NonTextured_N_2c20876_lodA_LightRear_a_GlassInnerPattern_1_Hard_NonTextured_N_2c20876__PorschePorsche_911TurboS992_2021LightRear_a_GlassInnerPattern__8b84a97_0.geometry} material={materials.PorschePorsche_911TurboS992_2021LightRear_a_GlassInnerPattern__8b84a97} />
        <mesh geometry={nodes.PorschelodA_LightRear_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_lodA_LightRear_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_Porsche_911Turbo_PorschemetaL_L_0.geometry} material={materials.PorschemetaL_L} />
        <mesh geometry={nodes.PorschelodA_LightRear_a_Coloured_1_Hard_Textured_NoiseA_NoSkin_Geo_lodA_LightRear_a_Coloured_1_Hard_Textured_NoiseA_NoSkin_Geo_Porsche__Plastic_SH_0.geometry} material={materials.Plastic_SH} />
        <mesh geometry={nodes.PorschelodA_LightRear_a_Base_1_Hard_NonTextured_NoSkin_Geo_lodA_LightRear_a_Base_1_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS992_202_chassis_0.geometry} material={materials.chassis} />
        <mesh geometry={nodes.PorschelodA_LightRear_a_Light_1_Hard_NonTextured_Skinned_Geo_lodA_LightRear_a_Light_1_Hard_NonTextured_Skinned_Geo_Porsche_911TurboS992_Rlight_map_0.geometry} material={materials.Rlight_map} />
        <mesh geometry={nodes.PorschelodA_LightRear_a_PatternReflectorA_1_Hard_NonTextured_N_d87f54b_lodA_LightRear_a_PatternReflectorA_1_Hard_NonTextured_N_d87f54b__PorschePorsche_911TurboS992_2021LightRear_a_PatternReflectorA__2523bc6_0.geometry} material={materials.PorschePorsche_911TurboS992_2021LightRear_a_PatternReflectorA__2523bc6} />
        <mesh geometry={nodes.PorschelodA_Interior_a_PatternAAlphaTest_1_Hard_Textured_Fabri_1c28b42_lodA_Interior_a_PatternAAlphaTest_1_Hard_Textured_Fabri_1c28b42__Pattern_A_0.geometry} material={materials.Pattern_A} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_Coloured_1_Hard_Textured_DirtyA_NoSkin_Geo_lodA_Exterior_a_Coloured_1_Hard_Textured_DirtyA_NoSkin_Geo_Porsche_91_exh_0.geometry} material={materials.material} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Soft_Textured_CarpetA_NoSkin_Geo_lodA_Interior_a_Coloured_1_Soft_Textured_CarpetA_NoSkin_Geo_Porsche__carpet_0.geometry} material={materials.carpet} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_Textured_BumpyA_NoSkin_Geo_lodA_Interior_a_Coloured_1_Hard_Textured_BumpyA_NoSkin_Geo_Porsche_91_Plastic_R_0.geometry} material={materials.Plastic_R} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Soft_Textured_AlcantaraA_NoSkin_Geo_lodA_Interior_a_Coloured_1_Soft_Textured_AlcantaraA_NoSkin_Geo_Po_alcantara_0.geometry} material={materials.alcantara} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_Textured_FabricA_NoSkin_Geo_lodA_Interior_a_Coloured_1_Hard_Textured_FabricA_NoSkin_Geo_Porsche__Plastic_R_0.geometry} material={materials.Plastic_R} />
        <mesh geometry={nodes.PorschelodA_Boot_a_PatternAAlphaTest_1_Hard_Textured_FabricA_N_30c29e1_lodA_Boot_a_PatternAAlphaTest_1_Hard_Textured_FabricA_N_30c29e1__Pattern_A_0.geometry} material={materials.Pattern_A} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_Textured_NoiseB_NoSkin_Geo_lodA_Interior_a_Coloured_1_Hard_Textured_NoiseB_NoSkin_Geo_Porsche_91_exh_0.geometry} material={materials.material} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_Coloured_1_Hard_Textured_ScuffedA_Skinned_Geo_lodA_Exterior_a_Coloured_1_Hard_Textured_ScuffedA_Skinned_Geo_Pors_exh_0.geometry} material={materials.material} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Base_1_Hard_NonTextured_NoSkin_Geo_lodA_Interior_a_Base_1_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS992_2021I_carpet_0.geometry} material={materials.carpet} />
        <mesh geometry={nodes.PorschelodA_LightFront_a_Base_1_Hard_NonTextured_NoSkin_Geo_lodA_LightFront_a_Base_1_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS992_2_chassis_0.geometry} material={materials.chassis} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_2_Hard_NonTextured_NoSkin_Geo_lodA_Interior_a_Coloured_2_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS9_Porschered_plastic_0.geometry} material={materials.Porschered_plastic} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Soft_Textured_CargoLinerA_Sk_5476d7a_lodA_Interior_a_Coloured_1_Soft_Textured_CargoLinerA_Sk_5476d7a__plastic_int_0.geometry} material={materials.plastic_int} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_Textured_NoiseA_Skinned_Geo_lodA_Interior_a_Coloured_1_Hard_Textured_NoiseA_Skinned_Geo_Porsche__Plastic_SH_0.geometry} material={materials.Plastic_SH} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_Textured_BumpyA_Skinned_Geo_lodA_Interior_a_Coloured_1_Hard_Textured_BumpyA_Skinned_Geo_Porsche__leather_int_1_0.geometry} material={materials.leather_int_1} />
        <mesh geometry={nodes.PorschelodA_SeatBelt_a_Coloured_1_Hard_Textured_NoiseA_NoSkin_Geo_lodA_SeatBelt_a_Coloured_1_Hard_Textured_NoiseA_NoSkin_Geo_Porsche_91_Plastic_R_0.geometry} material={materials.Plastic_R} />
        <mesh geometry={nodes.PorschelodA_Hood_a_Badges_1_Hard_NonTextured_Skinned_Geo_lodA_Hood_a_Badges_1_Hard_NonTextured_Skinned_Geo_Porsche_911TurboS992_2021Hoo_badges_0.geometry} material={materials.badges} />
        <mesh geometry={nodes.PorschelodA_Boot_a_Details_1_Hard_NonTextured_Skinned_Geo_lodA_Boot_a_Details_1_Hard_NonTextured_Skinned_Geo_Porsche_911TurboS992_2021B_PorschePorsche_911TurboS992_2021Boot_a_Details_1_Hard_NonTextu_99bd2e1_0.geometry} material={materials.PorschePorsche_911TurboS992_2021Boot_a_Details_1_Hard_NonTextu_99bd2e1} />
        <mesh geometry={nodes.PorschelodA_Boot_a_Light_1_Hard_NonTextured_Skinned_Geo_lodA_Boot_a_Light_1_Hard_NonTextured_Skinned_Geo_Porsche_911TurboS992_2021Boot__Porschehood_light_0.geometry} material={materials.Porschehood_light} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_Coloured_1_Hard_Textured_BumpyA_NoSkin_Geo_lodA_Exterior_a_Coloured_1_Hard_Textured_BumpyA_NoSkin_Geo_Porsche_91_Plastic_R_0.geometry} material={materials.Plastic_R} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_Coloured_1_Hard_Textured_ScuffedA_NoSkin_Geo_lodA_Exterior_a_Coloured_1_Hard_Textured_ScuffedA_NoSkin_Geo_Porsch_Plastic_R_0.geometry} material={materials.Plastic_R} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_PatternRadiator_1_Hard_Textured_Scuffed_ecd3a77_lodA_Exterior_a_PatternRadiator_1_Hard_Textured_Scuffed_ecd3a77__radiaator_0.geometry} material={materials.radiaator} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_GlassOuter_1_Hard_NonTextured_NoSkin_Geo_lodA_Exterior_a_GlassOuter_1_Hard_NonTextured_NoSkin_Geo_Porsche_911Tur_light_glass_0.geometry} material={materials.light_glass} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_GlassOuter_1_Hard_NonTextured_Skinned_Geo_lodA_Exterior_a_GlassOuter_1_Hard_NonTextured_Skinned_Geo_Porsche_911T_light_glass_0.geometry} material={materials.light_glass} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_PatternANoAlpha_1_Hard_NonTextured_NoSkin_Geo_lodA_Exterior_a_PatternANoAlpha_1_Hard_NonTextured_NoSkin_Geo_Pors_PorschePorsche_911TurboS992_2021Exterior_a_PatternANoAlpha_1_H_942b122_0.geometry} material={materials.PorschePorsche_911TurboS992_2021Exterior_a_PatternANoAlpha_1_H_942b122} />
        <mesh geometry={nodes.PorschelodA_Exterior_a_PatternRidgesA_1_Hard_Textured_NoiseA_N_cde920b_lodA_Exterior_a_PatternRidgesA_1_Hard_Textured_NoiseA_N_cde920b__plastic_int_0.geometry} material={materials.plastic_int} />
        <mesh geometry={nodes.PorschelodA_Hood_a_Details_1_Hard_Textured_ScuffedA_Skinned_Geo_lodA_Hood_a_Details_1_Hard_Textured_ScuffedA_Skinned_Geo_Porsche_911Tur_PorschemetaL_L_0.geometry} material={materials.PorschemetaL_L} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Base_1_Hard_NonTextured_Skinned_Geo_lodA_Interior_a_Base_1_Hard_NonTextured_Skinned_Geo_Porsche_911TurboS992_202_chassis_0.geometry} material={materials.chassis} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_NonTextured_Skinned_Geo_lodA_Interior_a_Coloured_1_Hard_NonTextured_Skinned_Geo_Porsche_911Turbo_Plastic_SH_0.geometry} material={materials.Plastic_SH} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_NonTextured_Skinned_Geo_lodA_Interior_a_Coloured_1_Hard_NonTextured_Skinned_Geo_Porsche_911Turbo_chrome_0.geometry} material={materials.chrome} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_Textured_BrushedA_NoSkin_Geo_lodA_Interior_a_Coloured_1_Hard_Textured_BrushedA_NoSkin_Geo_Porsch_PorschemetaL_L_0.geometry} material={materials.PorschemetaL_L} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_Textured_GrainB_Skinned_Geo_lodA_Interior_a_Coloured_1_Hard_Textured_GrainB_Skinned_Geo_Porsche__leather_int_1_0.geometry} material={materials.leather_int_1} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_Textured_NoiseA_NoSkin_Geo_lodA_Interior_a_Coloured_1_Hard_Textured_NoiseA_NoSkin_Geo_Porsche_91_plastic_int_0.geometry} material={materials.plastic_int} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_Textured_ScuffedA_NoSkin_Geo_lodA_Interior_a_Coloured_1_Hard_Textured_ScuffedA_NoSkin_Geo_Porsch_PorschemetaL_L_0.geometry} material={materials.PorschemetaL_L} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_Textured_ScuffedA_Skinned_Geo_lodA_Interior_a_Coloured_1_Hard_Textured_ScuffedA_Skinned_Geo_Pors_PorschemetaL_L_0.geometry} material={materials.PorschemetaL_L} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Coloured_1_Hard_Textured_SeatbeltB_NoSkin_Geo_lodA_Interior_a_Coloured_1_Hard_Textured_SeatbeltB_NoSkin_Geo_Pors_PorschePorsche_911TurboS992_2021Interior_a_Coloured_1_Hard_Tex_c5b37d3_0.geometry} material={materials.PorschePorsche_911TurboS992_2021Interior_a_Coloured_1_Hard_Tex_c5b37d3} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Details_1_Hard_Textured_FabricA_Skinned_Geo_lodA_Interior_a_Details_1_Hard_Textured_FabricA_Skinned_Geo_Porsche__INT_Normal_L_0.geometry} material={materials.INT_Normal_L} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Details_1_Hard_Textured_GrainB_Skinned_Geo_lodA_Interior_a_Details_1_Hard_Textured_GrainB_Skinned_Geo_Porsche_91_INT_Normal_L_0.geometry} material={materials.INT_Normal_L} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Details_1_Hard_Textured_NoiseA_Skinned_Geo_lodA_Interior_a_Details_1_Hard_Textured_NoiseA_Skinned_Geo_Porsche_91_PorschemetaL_L_0.geometry} material={materials.PorschemetaL_L} />
        <mesh geometry={nodes.PorschelodA_Interior_a_GlassInner_1_Hard_NonTextured_Skinned_Geo_lodA_Interior_a_GlassInner_1_Hard_NonTextured_Skinned_Geo_Porsche_911T_light_glass_0.geometry} material={materials.light_glass} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Light_1_Hard_NonTextured_Skinned_Geo_lodA_Interior_a_Light_1_Hard_NonTextured_Skinned_Geo_Porsche_911TurboS992_2_Lignt_In_0.geometry} material={materials.Lignt_In} />
        <mesh geometry={nodes.PorschelodA_Interior_a_PatternBNoAlpha_1_Hard_NonTextured_Skinned_Geo_lodA_Interior_a_PatternBNoAlpha_1_Hard_NonTextured_Skinned_Geo_Po_PorschePorsche_911TurboS992_2021Interior_a_PatternBNoAlpha_1_H_3cafef7_0.geometry} material={materials.PorschePorsche_911TurboS992_2021Interior_a_PatternBNoAlpha_1_H_3cafef7} />
        <mesh geometry={nodes.PorschelodA_Interior_a_PatternRidgesA_1_Hard_NonTextured_NoSkin_Geo_lodA_Interior_a_PatternRidgesA_1_Hard_NonTextured_NoSkin_Geo_Porsch_PorschePorsche_911TurboS992_2021Interior_a_PatternRidgesA_1_Ha_4c79b88_0.geometry} material={materials.PorschePorsche_911TurboS992_2021Interior_a_PatternRidgesA_1_Ha_4c79b88} />
        <mesh geometry={nodes.PorschelodA_Interior_a_RegionA_1_Hard_NonTextured_NoSkin_Geo_lodA_Interior_a_RegionA_1_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS992_PorschePorsche_911TurboS992_2021RegionA1_0.geometry} material={materials.PorschePorsche_911TurboS992_2021RegionA1} />
        <mesh geometry={nodes.PorschelodA_Interior_a_RegionA_1_Hard_NonTextured_Skinned_Geo_lodA_Interior_a_RegionA_1_Hard_NonTextured_Skinned_Geo_Porsche_911TurboS9_PorschePorsche_911TurboS992_2021RegionA1_0.geometry} material={materials.PorschePorsche_911TurboS992_2021RegionA1} />
        <mesh geometry={nodes.PorschelodA_Interior_a_Screens_1_Hard_NonTextured_NoSkin_Geo_lodA_Interior_a_Screens_1_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS992_PorscheDisplay_0.geometry} material={materials.PorscheDisplay} />
        <mesh geometry={nodes.PorschelodA_LightRear_a_PatternANoAlpha_1_Hard_NonTextured_NoSkin_Geo_lodA_LightRear_a_PatternANoAlpha_1_Hard_NonTextured_NoSkin_Geo_Po_PorschePorsche_911TurboS992_2021LightRear_a_PatternANoAlpha_1__cf9046a1_0.geometry} material={materials.PorschePorsche_911TurboS992_2021LightRear_a_PatternANoAlpha_1__cf9046a1} />
        <mesh geometry={nodes.PorschelodA_LightFront_a_GlassOuter_1_Hard_NonTextured_Skinned_Geo_lodA_LightFront_a_GlassOuter_1_Hard_NonTextured_Skinned_Geo_Porsche__light_glass_0.geometry} material={materials.light_glass} />
        <mesh geometry={nodes.PorschelodA_LightFront_a_GlassInnerPattern_1_Hard_NonTextured__262a677_lodA_LightFront_a_GlassInnerPattern_1_Hard_NonTextured__262a677__PorschePorsche_911TurboS992_2021LightFront_a_GlassInnerPattern_bc11ab8_0.geometry} material={materials.PorschePorsche_911TurboS992_2021LightFront_a_GlassInnerPattern_bc11ab8} />
        <mesh geometry={nodes.PorschelodA_LightFront_a_Coloured_1_Hard_Textured_NoiseA_NoSkin_Geo_lodA_LightFront_a_Coloured_1_Hard_Textured_NoiseA_NoSkin_Geo_Porsch_Plastic_R_0.geometry} material={materials.Plastic_R} />
        <mesh geometry={nodes.PorschelodA_LightFront_a_Coloured_1_Hard_Textured_BrushedA_NoSkin_Geo_lodA_LightFront_a_Coloured_1_Hard_Textured_BrushedA_NoSkin_Geo_Po_PorschemetaL_L_0.geometry} material={materials.PorschemetaL_L} />
        <mesh geometry={nodes.PorschelodA_SeatBelt_a_Coloured_1_Hard_Textured_SeatbeltB_NoSkin_Geo_lodA_SeatBelt_a_Coloured_1_Hard_Textured_SeatbeltB_NoSkin_Geo_Pors_PorschePorsche_911TurboS992_2021SeatBelt_a_Coloured_1_Hard_Tex_559c49b1_0.geometry} material={materials.PorschePorsche_911TurboS992_2021SeatBelt_a_Coloured_1_Hard_Tex_559c49b1} />
        <mesh geometry={nodes.PorschelodA_SeatBelt_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_lodA_SeatBelt_a_Coloured_1_Hard_NonTextured_NoSkin_Geo_Porsche_911TurboS9_PorschemetaL_L_0.geometry} material={materials.PorschemetaL_L} />
      </group>
    </group>
  )
}

useGLTF.preload('/2021_por.glb')
