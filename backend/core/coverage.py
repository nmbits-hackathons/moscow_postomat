import numpy as np 
import pandas as pd
import json


def make_coverage(request):
    '''
    '''
    if request['places']['library'] > 0:
        df = pd.read_csv('core/datasets/math_model_result.csv')
        df = df.iloc[:, 1:]
        a = np.random.choice(200, size=50, replace=False)
        res = df.iloc[a, :].sort_values(by='Mark', ascending=False)
        return res.to_json(orient='records',force_ascii=False)
    else:
        return pd.DataFrame().to_json(force_ascii=False)
