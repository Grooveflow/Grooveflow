import * as poseDetection from '@tensorflow-models/pose-detection';
import '@tensorflow/tfjs-backend-webgl';

export const loadPoseModel = async () => {
  const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet, {
    modelType: 'SinglePose.Lightning',
  });
  return detector;
};
