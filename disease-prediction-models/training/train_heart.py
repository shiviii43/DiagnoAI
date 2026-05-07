import pandas as pd
from sklearn.model_selection import train_test_split
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score
import joblib

#Loading the dataset
df = pd.read_csv("datasets/heart.csv")

#Features
X = df.drop("target",axis=1)

#Target 
y = df["target"]

#Spliting the dataset into test and train
X_test, X_train, y_test, y_train = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y
)

#Model Creation 
model = XGBClassifier()

#Model training
model.fit(X_train,y_train)

#Model Prediction 
y_pred = model.predict(X_test)

#Accuracy
accuracy = accuracy_score(y_pred,y_test)
print(accuracy)

joblib.dump(model,"models/heart_model.pkl")
print("Model Saved Successfully")